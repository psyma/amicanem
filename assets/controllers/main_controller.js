import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   
 
import CryptoJS from 'crypto-js';
import Pusher from 'pusher-js' 
import Bowser from 'bowser';

class MessageType {
    static TEXT = 0
    static IMAGE = 1
    static GIF = 2
    static AUDIO = 3
    
    static get TEXT() { return TEXT }
    static get IMAGE() { return IMAGE }
    static get GIF() { return GIF }
}

class Message {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.isSeen = data.isSeen
    }
}

export default class extends Controller {
    static values = {
        currentUser: Object,
        uid: String,
        publickey: String,
        privatekey: String,
        passphrase: String
    }
    static service = null
    static pusher = null
    static currentUserPublickey = null
    static currentUserPrivatekey = null
    static userToChatId = null
    static userToChatPublickey = null 
    static page = null
    static pageSize = null

    connect = async () => {  
        this.page = 1
        this.pageSize = 20
        this.service = new Service()

        this.usersOnlineMap = new Map()
        this.usersMap = new Map()

        Pusher.logToConsole = false;
        this.pusher = new Pusher('7c4d952c51d2be9a8302', { cluster: 'ap1', authEndpoint: '/pusher_auth' });

        const response = await this.service.getUsers(this.uidValue)
        const users = await response.json()

        
        this.setDarkModeToggle() 
        this.setSendMessageButtonClick()
        this.setUserPusherPresenceChannel()
        this.setSendMessageChatboxInputKeyDown()
        await this.setEncryptionDetails()  
        await this.setUserLastMessage()

        users.forEach(async(user) => {
            await this.setSidebarUserClickEvent(user)
            await this.setUserPusherMessagesChannel(user)
            
            this.usersMap.set(user.id, user)
        }) 

        
    } 

    setEncryptionDetails = async () => {   
        if (!this.passphraseValue) {
            const randomBytes = CryptoJS.lib.WordArray.random(16);
            const passphrase = randomBytes.toString(CryptoJS.enc.Hex)
    
            const keypair = await Utils.generateEncryptionKeyPair()
            const publickey = Utils.arrayBufferToBase64(keypair.publicKey)
            const privatekey = CryptoJS.AES.encrypt(Utils.arrayBufferToBase64(keypair.privateKey), passphrase)
             
            await this.service.setEncryptionDetails(this.uidValue, publickey, privatekey, passphrase)
            window.location.href = "/"
        }
        else { 
            this.currentUserPublickey = Utils.base64ToArrayBuffer(this.publickeyValue)
            this.currentUserPrivatekey = Utils.base64ToArrayBuffer(CryptoJS.AES.decrypt(this.privatekeyValue, this.passphraseValue).toString(CryptoJS.enc.Utf8))
        }
    } 

    setUserPusherMessagesChannel = async (user) => { 
        const chatbox = document.getElementById('chatbox')
        const channel = this.pusher.subscribe('messages')

        channel.bind(`messages/${user.id}/${this.currentUserValue.id}`, async (data) => {
            const message = new Message(data)    
            const { sender, receiver } = JSON.parse(atob(message.content))
            const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver))
            
            if (messageData.sender == this.userToChatId) {
                const messageElement = Utils.createIncomingMessageTextElement(messageData.content, user.userDetails.avatar)
                this.chatboxScrollToBottom()
                chatbox.appendChild(messageElement)
            }

            this.setUserLastMesasgeElement(messageData.sender, messageData.content) 
        })

        await this.sleep(1)
    }

    setUserPusherPresenceChannel = () => {
        let channel = this.pusher.subscribe('presence-online-users'); 
        let myThis = this
        channel.bind('pusher:subscription_succeeded', function(members) {  
            members.each(function(member) {
                const id = member.info.id
                const userOnlineStatus = document.getElementById(`user${id}-online-status`)
                userOnlineStatus.classList.remove('bg-red-400')
                userOnlineStatus.classList.add('bg-green-400') 

                myThis.usersOnlineMap.set(id, true) 
            });
        });
        channel.bind('pusher:member_added', function(member) {
            const id = member.info.id
            const userOnlineStatus = document.getElementById(`user${id}-online-status`)
            userOnlineStatus.classList.remove('bg-red-400')
            userOnlineStatus.classList.add('bg-green-400') 

            if (id == myThis.userToChatId) {
                const userToChatOnlineStatus = document.getElementById('userToChatOnlineStatus')
                const userToChatOnlineText = document.getElementById('userToChatOnlineText') 
                userToChatOnlineStatus.classList.remove('bg-red-400')
                userToChatOnlineStatus.classList.add('bg-green-400')
                userToChatOnlineText.textContent = "Active now" 
            }

            myThis.usersOnlineMap.set(id, true)
        });
        
        channel.bind('pusher:member_removed', function(member) {
            const id = member.info.id
            const userOnlineStatus = document.getElementById(`user${id}-online-status`)
            userOnlineStatus.classList.add('bg-red-400')
            userOnlineStatus.classList.remove('bg-green-400')

            if (id == myThis.userToChatId) {
                const userToChatOnlineStatus = document.getElementById('userToChatOnlineStatus')
                const userToChatOnlineText = document.getElementById('userToChatOnlineText') 
                userToChatOnlineStatus.classList.remove('bg-green-400')
                userToChatOnlineStatus.classList.add('bg-red-400')
                userToChatOnlineText.textContent = "Last seen 22 min ago" 
            }

            myThis.usersOnlineMap.set(id, false)
        });
    }

    setSidebarUserClickEvent = async (user) => {
        const userElement = document.getElementById(`user${user.id}`) // sidebar user list element   
        userElement.onclick = async () => {
            const name = `${user.userDetails.firstname} ${user.userDetails.lastname}`
            const avatar = user.userDetails.avatar
            const publickey = user.userDetails.publickey.publickey
            //const userOnlineStatus = document.getElementById(`user${user.id}-online-status`)
            this.userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
            this.userToChatId = user.id

            this.setUserToChatName(name)
            this.setUserToChatAvatar(avatar)
            this.setUserToChatOnlineStatus()
            this.setSidebarUserToggleForMobile() 
            this.setMainChatbox()

            await this.setConversations()
        } 

        await this.sleep(1)
    }

    setUserLastMesasgeElement = (id, content) => {
        const userLastMessage = document.getElementById(`user${id}-last-message`)
        userLastMessage.textContent = content
    }

    setUserLastMessage = async () => {
        const response = await this.service.getLastMessages(this.uidValue, this.currentUserValue.id)
        if (response.ok) {
            const messages = await response.json()
            messages.forEach(async(data) => { 
                const message = new Message(data)    
                const { sender, receiver } = JSON.parse(atob(message.content)) 

                try { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender)) 
                    this.setUserLastMesasgeElement(messageData.receiver, messageData.content) 
                } catch(e) { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                    this.setUserLastMesasgeElement(messageData.sender, messageData.content) 
                }
            })
        }
    }

    setConversations = async () => { 
        function clearChatboxElement() {
            const chatbox = document.getElementById('chatbox')
            const element = document.createElement('div')
            element.className = 'flex flex-grow'
            chatbox.textContent = ''
            chatbox.append(element)
        }

        const response = await this.service.getMessages(this.uidValue, this.currentUserValue.id, this.userToChatId, this.page, this.pageSize) 
        if (response.ok) { 
            const messages = await response.json() 
            const chatbox = document.getElementById('chatbox')
            clearChatboxElement()
            for(let i = 0; i < messages.length; i++) {
                const data = messages[i] 
                const message = new Message(data)    
                const { sender, receiver } = JSON.parse(atob(message.content)) 

                try {
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender)) 
                    const messageElement = Utils.createOutgoingMessageTextElement(messageData.content)
                    chatbox.appendChild(messageElement)

                    const imgCheck = messageElement.querySelector('.img-check')
                    imgCheck.src = '/green_checks.svg' 
                } catch(e) { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                    const messageElement = Utils.createIncomingMessageTextElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar)
                    chatbox.appendChild(messageElement) 
                }
            } 
            this.chatboxScrollToBottom(true)
        }
    }

    setUserToChatName = (name) => {
        const userToChatName = document.getElementById('userToChatName')
        userToChatName.textContent = name
    }

    setUserToChatAvatar = (avatar) => {
        const userToChatAvatar = document.getElementById('userToChatAvatar')
        userToChatAvatar.style.backgroundImage = `url('${avatar}')`
    }

    setUserToChatOnlineStatus = () => {
        const isOnline = this.usersOnlineMap.get(this.userToChatId)
        const userToChatOnlineStatus = document.getElementById('userToChatOnlineStatus')
        const userToChatOnlineText = document.getElementById('userToChatOnlineText')
        if (isOnline) {
            userToChatOnlineStatus.classList.remove('bg-red-400')
            userToChatOnlineStatus.classList.add('bg-green-400')
            userToChatOnlineText.textContent = "Active now"
        }
        else {
            userToChatOnlineStatus.classList.add('bg-red-400')
            userToChatOnlineStatus.classList.remove('bg-green-400')
            userToChatOnlineText.textContent = "Last seen 22 min ago"
        }
    }

    setDarkModeToggle = () => { 
        let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
            document.documentElement.classList.add('dark');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.classList.remove('dark');
        }

        var themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.addEventListener('click', function() { 
            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

            // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            } 
        });  
    }

    setSidebarUserToggleForMobile = () => { 
        if (this.getUserAgentPlatformType() == 'mobile') {
            document.getElementById('separatorSidebarButton').click()
        } 
    }

    setMainChatbox = () => {
        const mainChatbox = document.getElementById('mainChatbox')
        const mainChatboxIntro = document.getElementById('mainChatboxIntro')

        mainChatbox.classList.remove('hidden')
        mainChatboxIntro.classList.add('hidden') 
    } 

    sendTextMessage = async (message) => {
        const data = JSON.stringify({
            sender: this.currentUserValue.id,
            receiver: this.userToChatId,
            type: MessageType.TEXT,
            content: message,
            timestamp: Date.now()
        })

        const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
        const encryptedReceiverTextMessage = await Utils.encryptMessage(this.userTochatPublickey, data) 
        const content = btoa(JSON.stringify({
            sender: encryptedSenderTextMessage,
            receiver: encryptedReceiverTextMessage
        }))

        const chatbox = document.getElementById('chatbox')
        const chatboxInput = document.getElementById('chatboxInput')
        const messageElement = Utils.createOutgoingMessageTextElement(message)
        
        this.chatboxScrollToBottom(true)
        chatboxInput.textContent = ''
        chatbox.appendChild(messageElement) 
        
        const response = await this.service.createTextMessage(this.uidValue, `messages/${this.currentUserValue.id}/${this.userToChatId}`, this.currentUserValue.id, this.userToChatId, MessageType.TEXT, content, Date.now(), true)
        const imgCheck = messageElement.querySelector('.img-check')
        if (response.ok) { 
            this.setUserLastMesasgeElement(this.userToChatId, message) 
            imgCheck.src = '/green_checks.svg'
        }
        else {
            imgCheck.src = '/red_checks.svg'
        }
    }

    setSendMessageButtonClick = () => { 
        const chatboxInput = document.getElementById('chatboxInput')
        const sendMessageButton = document.getElementById('sendMessageButton')

        sendMessageButton.onclick = async () => {
            const message = chatboxInput.innerText.trim() 
            if (!this.isEmptyOrSpaces(message)) {
                await this.sendTextMessage(message)
            } 
        }
    }

    setSendMessageChatboxInputKeyDown = () => { 
        const chatboxInput = document.getElementById('chatboxInput')
        chatboxInput.onkeydown = async (e) => {
            const message = e.target.innerText.trim()
            if (this.getUserAgentPlatformType() == 'desktop') {
                if (e.key === 'Enter' && !e.shiftKey) {  
                    e.preventDefault()
                    
                    if (!this.isEmptyOrSpaces(message)) {
                        await this.sendTextMessage(message)
                    } 
                }
            }
        }
    }

    getUserAgentPlatformType = () => {
        const browser = Bowser.getParser(window.navigator.userAgent); 
        return browser.parsedResult.platform.type  
    }

    chatboxScrollToBottom = (force=false) => {
        const chatbox = document.getElementById('chatbox')
        function isScrollbarAtBottom(element){
            const offset = Math.abs(element.scrollHeight - element.clientHeight) * .40  
            return Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= offset
        }

        if (force) {
            setTimeout(() => {
                chatbox.style.scrollBehavior = "smooth"
                chatbox.scrollTop = chatbox.scrollHeight
            }, 500)
        }
        else {
            if (isScrollbarAtBottom(chatbox)) {
                setTimeout(() => {
                    chatbox.style.scrollBehavior = "smooth"
                    chatbox.scrollTop = chatbox.scrollHeight
                }, 500)
            }
        }
    }

    isEmptyOrSpaces = (str) => {
        return str === null || str.match(/^ *$/) !== null
    } 

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

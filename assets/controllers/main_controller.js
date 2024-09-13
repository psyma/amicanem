import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   
 
import Pusher from 'pusher-js' 
import Bowser from 'bowser';
import CryptoJS from 'crypto-js';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

class MessageType {
    static TEXT = 0
    static IMAGE = 1
    static GIF = 2
    static AUDIO = 3
    
    static get TEXT() { return TEXT }
    static get IMAGE() { return IMAGE }
    static get GIF() { return GIF }
} 

export default class extends Controller {
    static values = {
        currentUser: Object,
        uid: String,
        publickey: String,
        privatekey: String,
        passphrase: String
    } 

    connect = async () => {   
        TimeAgo.addDefaultLocale(en)
        Pusher.logToConsole = false;

        this.pusher = new Pusher('7c4d952c51d2be9a8302', { 
            cluster: 'ap1', 
            authEndpoint: '/pusher_auth', 
            auth: { 
                params: { 
                    'uid': 
                    this.uidValue 
                } 
            } 
        });

        this.page = 1
        this.pageSize = 20
        this.service = new Service()
        this.timeAgo = new TimeAgo('en-US')

        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = false
        this.usersOnlineMap = new Map()
        this.usersMap = new Map() 

        const response = await this.service.getUsers(this.uidValue)
        if (response.ok) {
            const users = await response.json() 

            this.setDarkModeToggle() 
            this.setSendMessageButtonClick()
            this.setUserPusherPresenceChannel()
            this.setSendMessageChatboxInputKeyDown()

            await this.setEncryptionDetails()  
            await this.setUserLastMessage()
            await this.setChatboxInfiniteScrolling()

            users.forEach(async(user) => {
                await this.setSidebarUserClickEvent(user)
                await this.setUserPusherMessagesChannel(user)
                
                this.usersMap.set(user.id, user)
            }) 
        } 
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
        const channel = this.pusher.subscribe(`${user.id}-${this.currentUserValue.id}`)

        channel.bind(`messages/${user.id}/${this.currentUserValue.id}`, async (data) => { 
            const { id, content, isSeen } = data
            const { sender, receiver } = JSON.parse(atob(content))
            const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver))
            
            if (messageData.sender == this.userToChatId) {
                const messageElement = Utils.createIncomingMessageTextElement(messageData.content, user.userDetails.avatar, messageData.timestamp, this.timeAgo)
                this.chatboxScrollToBottom()
                chatbox.appendChild(messageElement)

                Utils.setChatboxMessageAvatarHidden()
                Utils.setChatboxMessageBorderAndMargin()
            }

            Utils.setUserLastMessageContent(messageData.sender, messageData.content)  
            Utils.setUserLastMessageTimestamp(messageData.sender, messageData.timestamp)
            Utils.setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(messageData.sender)
        })

        await this.sleep(1)
    }

    setUserPusherPresenceChannel = () => {
        const myThis = this
        const channel = this.pusher.subscribe('presence-online-users'); 
        
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
                const userToChatOnlineStatus = document.getElementById('usertochat-online-status')
                const userToChatOnlineText = document.getElementById('usertochat-online-text') 
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
                const userToChatOnlineStatus = document.getElementById('usertochat-online-status')
                const userToChatOnlineText = document.getElementById('usertochat-online-text') 
                userToChatOnlineStatus.classList.remove('bg-green-400')
                userToChatOnlineStatus.classList.add('bg-red-400')
                userToChatOnlineText.textContent = "Offline"
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
            this.userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
            this.userToChatId = user.id
            this.isSidebarUserClickOnce = true

            this.setUserToChatName(name)
            this.setUserToChatAvatar(avatar) 
            this.setSidebarUserToggleForMobile() 
            this.setMainChatbox()
            
            this.setDefaultValues()
            await this.setConversations()

            this.setUserToChatOnlineStatus()
        } 

        await this.sleep(1)
    } 

    setUserLastMessage = async () => {
        const response = await this.service.getLastMessages(this.uidValue, this.currentUserValue.id)
        if (response.ok) {
            const messages = await response.json()
            for (let i = 0; i < messages.length; i++) {
                const { id, content, isSeen } = messages[i]
                const { sender, receiver } = JSON.parse(atob(content))  
                
                try { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender)) 
                    Utils.setUserLastMessageContent(messageData.receiver, messageData.content) 
                    Utils.setUserLastMessageTimestamp(messageData.receiver, messageData.timestamp)
                    Utils.setUserLastMessageTimeAgo(messageData.receiver, messageData.timestamp, this.timeAgo)
                } catch(e) { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                    Utils.setUserLastMessageContent(messageData.sender, messageData.content) 
                    Utils.setUserLastMessageTimestamp(messageData.sender, messageData.timestamp)
                    Utils.setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, this.timeAgo)
                }
            } 
        }

        Utils.sortUsersListBaseOnLastMessageTimestamp()
    }

    setChatboxInfiniteScrolling = async () => {
        const chatbox = document.getElementById('chatbox')
        chatbox.addEventListener('scroll', async () => {
            const scrollTop = chatbox.scrollTop; 
            if (scrollTop == 0 && !this.isReceivedFirstMessage && !this.isLockInfiniteScrolling) {
                this.page += 1   
                this.isLockInfiniteScrolling = true
                const flexGrowChild = chatbox.removeChild(chatbox.children[0]) 
                const firstChild = chatbox.children[0]
                const loader = Utils.createLoaderElement()
                chatbox.prepend(loader)
 
                const response = await this.service.getMessages(this.uidValue, this.currentUserValue.id, this.userToChatId, this.page, this.pageSize, 1)
                if (response.ok) {
                    const messages = await response.json()
                    chatbox.removeChild(loader)
                    if (messages.length) { 
                        for(let i = 0; i < messages.length; i++) { 
                            const { id, content, isSeen } = messages[i] 
                            const { sender, receiver } = JSON.parse(atob(content)) 
            
                            try {
                                const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender)) 
                                const messageElement = Utils.createOutgoingMessageTextElement(messageData.content, messageData.timestamp, this.timeAgo)
                                chatbox.prepend(messageElement)
            
                                const imgCheck = messageElement.querySelector('.img-check')
                                imgCheck.src = '/green_checks.svg' 
                            } catch(e) { 
                                const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                                const messageElement = Utils.createIncomingMessageTextElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                                chatbox.prepend(messageElement) 
                            }
                        } 

                        Utils.setChatboxMessageAvatarHidden()
                        Utils.setChatboxMessageBorderAndMargin()

                        setTimeout(() => {
                            firstChild.scrollIntoView({ behavior: "smooth", block: "end" })
                            chatbox.prepend(flexGrowChild)
                            this.isLockInfiniteScrolling = false
                        }, 500)
                    }
                    else {
                        this.isReceivedFirstMessage = true
                    }
                }
            }

            else {
                this.isSidebarUserClickOnce = false
            }
        }) 

        await this.sleep(1)
    }

    setDefaultValues = () => {
        this.page = 1 
        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = true 
    } 

    setConversations = async () => {  
        function clearChatboxElement() { 
            const chatbox = document.getElementById('chatbox') 
            const element = document.createElement('div')
            element.className = 'flex flex-grow' 
            chatbox.innerHTML = ''
            chatbox.append(element) 
        }
 
        clearChatboxElement()
        const chatbox = document.getElementById('chatbox')
        const loader = Utils.createLoaderElement()
        chatbox.appendChild(loader)

        let hasMessages = false
        const response = await this.service.getMessages(this.uidValue, this.currentUserValue.id, this.userToChatId, this.page, this.pageSize)  
        if (response.ok) {  
            const messages = await response.json()    
            for(let i = 0; i < messages.length; i++) { 
                const { id, content, isSeen } = messages[i]
                const { sender, receiver } = JSON.parse(atob(content)) 

                try {
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender))  
                    const messageElement = Utils.createOutgoingMessageTextElement(messageData.content, messageData.timestamp, this.timeAgo)
                    chatbox.appendChild(messageElement)

                    const imgCheck = messageElement.querySelector('.img-check')
                    imgCheck.src = '/green_checks.svg'  
                } catch(e) { 
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                    const messageElement = Utils.createIncomingMessageTextElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                    chatbox.appendChild(messageElement)  
                }
            } 
            this.chatboxScrollToBottom(true)

            hasMessages = messages.length ? true : false
        }

        this.isLockInfiniteScrolling = false
        chatbox.removeChild(loader) 
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxMessageBorderAndMargin() 
        
        if (!hasMessages) {
            const user = this.usersMap.get(this.userToChatId)
            const name = `${user.userDetails.firstname} ${user.userDetails.lastname}`
            const avatar = user.userDetails.avatar
            Utils.setIntroductionElement(name, avatar)
        }
    }

    setUserToChatName = (name) => {
        const userToChatName = document.getElementById('userToChatName')
        userToChatName.textContent = name
    }

    setUserToChatAvatar = (avatar) => {
        const userToChatAvatar = document.getElementById('usertochat-avatar')
        userToChatAvatar.style.backgroundImage = `url('${avatar}')`
    }

    setUserToChatOnlineStatus = () => {
        const isOnline = this.usersOnlineMap.get(this.userToChatId)
        const userToChatOnlineStatus = document.getElementById('usertochat-online-status')
        const userToChatOnlineText = document.getElementById('usertochat-online-text')
        if (isOnline) {
            userToChatOnlineStatus.classList.remove('bg-red-400')
            userToChatOnlineStatus.classList.add('bg-green-400')
            userToChatOnlineText.textContent = "Active now"
        }
        else {
            userToChatOnlineStatus.classList.add('bg-red-400')
            userToChatOnlineStatus.classList.remove('bg-green-400') 
            setTimeout(async() => {
                await this.setUserLastSeen(userToChatOnlineText)
            }, 1)
        }
    }

    setUserLastSeen = async (element) => {
        element.textContent = 'Offline'
        const response = await this.service.getUserLastSeen(this.uidValue, this.userToChatId) 
        if (response.ok) {
            const data = await response.json()  
            element.textContent = "Last seen " + this.timeAgo.format(parseInt(data.timestamp), 'round')
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
            setTimeout(() => {
                document.getElementById('separator-sidebar-button').click()
            }, 200)
        } 
    }

    setMainChatbox = () => {
        const mainChatbox = document.getElementById('main-chatbox')
        const mainChatboxIntro = document.getElementById('main-chatbox-intro')

        mainChatbox.classList.remove('hidden')
        mainChatboxIntro.classList.add('hidden') 
    } 

    sendTextMessage = async (message) => {
        const timestamp = Date.now()

        const data = JSON.stringify({
            sender: this.currentUserValue.id,
            receiver: this.userToChatId,
            type: MessageType.TEXT,
            content: message,
            timestamp: timestamp
        })

        const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
        const encryptedReceiverTextMessage = await Utils.encryptMessage(this.userTochatPublickey, data) 
        const content = btoa(JSON.stringify({
            sender: encryptedSenderTextMessage,
            receiver: encryptedReceiverTextMessage
        }))

        const chatbox = document.getElementById('chatbox')
        const chatboxInput = document.getElementById('chatbox-input')
        const messageElement = Utils.createOutgoingMessageTextElement(message, timestamp, this.timeAgo)
        
        this.chatboxScrollToBottom(true)
        chatboxInput.textContent = ''
        chatbox.appendChild(messageElement) 

        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxMessageBorderAndMargin()  
        
        const response = await this.service.createTextMessage(this.uidValue, `messages/${this.currentUserValue.id}/${this.userToChatId}`, `${this.currentUserValue.id}-${this.userToChatId}`, this.currentUserValue.id, this.userToChatId, MessageType.TEXT, content, timestamp, true)
        const imgCheck = messageElement.querySelector('.img-check')
        if (response.ok) { 
            Utils.setUserLastMessageContent(this.userToChatId, message) 
            Utils.setUserLastMessageTimestamp(this.userToChatId, timestamp)
            Utils.setUserLastMessageTimeAgo(this.userToChatId, timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(this.userToChatId)
            imgCheck.src = '/green_checks.svg'
        }
        else {
            imgCheck.src = '/red_checks.svg'
        }
    }

    setSendMessageButtonClick = () => { 
        const chatboxInput = document.getElementById('chatbox-input')
        const sendMessageButton = document.getElementById('send-message-button')

        sendMessageButton.onclick = async () => {
            const message = chatboxInput.innerText.trim() 
            if (!this.isEmptyOrSpaces(message)) {
                await this.sendTextMessage(message)
            } 
        }
    }

    setSendMessageChatboxInputKeyDown = () => { 
        const chatboxInput = document.getElementById('chatbox-input')
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

import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   

import { Drawer } from 'flowbite';
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

    connect = async () => {  
        this.service = new Service()

        Pusher.logToConsole = false;
        this.pusher = new Pusher('7c4d952c51d2be9a8302', { cluster: 'ap1' });

        const response = await this.service.getUsers(this.uidValue)
        const users = await response.json()

         
        this.setDarkModeToggle() 
        this.setSendMessageButtonClick()
        await this.setEncryptionDetails() 

        users.forEach(async(user) => {
            await this.setSidebarUserClickEvent(user)
            await this.setUserPusherChannelSubscription(user)
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

    setUserPusherChannelSubscription = async (user) => { 
        const chatbox = document.getElementById('chatbox')
        const channel = this.pusher.subscribe('messages')

        channel.bind(`messages/${user.id}/${this.currentUserValue.id}`, async (data) => {
            const message = new Message(data)   
            const { sender, receiver } = JSON.parse(atob(message.content))
            const { id, content, isSeen } = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver))

            const messageElement = Utils.createIncomingMessageTextElement(content)
            chatbox.appendChild(messageElement)
        })

        await this.sleep(1)
    }

    setSidebarUserClickEvent = async (user) => {
        const userElement = document.getElementById(`user${user.id}`) // sidebar user list element 
        userElement.onclick = () => {
            const name = userElement.getAttribute('name')
            const publickey = userElement.getAttribute('publickey')
            this.userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
            this.userToChatId = user.id

            this.setUserToChatName(name)
            this.setSidebarUserToggleForMobile() 
            this.setMainChatbox()
        } 

        await this.sleep(1)
    }

    setUserToChatName = (name) => {
        const userToChatName = document.getElementById('userToChatName')
        userToChatName.textContent = name
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
        const browser = Bowser.getParser(window.navigator.userAgent); 
        if (browser.parsedResult.platform.type == 'mobile') {
            document.getElementById('separatorSidebarButton').click()
        } 
    }

    setMainChatbox = () => {
        const mainChatbox = document.getElementById('mainChatbox')
        const mainChatboxIntro = document.getElementById('mainChatboxIntro')

        mainChatbox.classList.remove('hidden')
        mainChatboxIntro.classList.add('hidden') 
    }

    setSendMessageButtonClick = () => {
        const chatbox = document.getElementById('chatbox')
        const chatboxInput = document.getElementById('chatboxInput')
        const sendMessageButton = document.getElementById('sendMessageButton')

        sendMessageButton.onclick = async () => {
            const message = chatboxInput.textContent.trim()
            if (!this.isEmptyOrSpaces(message)) {
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
                const response = await this.service.createTextMessage(this.uidValue, `messages/${this.currentUserValue.id}/${this.userToChatId}`, this.currentUserValue.id, this.userToChatId, MessageType.TEXT, content, Date.now(), true)
                if (response.ok) {
                    const messageElement = Utils.createOutgoingMessageTextElement(message)
                    chatbox.appendChild(messageElement)
                }
            }

            chatboxInput.textContent = ''
        }
    }

    isEmptyOrSpaces = (str) => {
        return str === null || str.match(/^ *$/) !== null
    } 

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils/utils';
import Service from "../service/service"   
import MessageType from '../js/types/message_type';
import TextMessageHandler from '../js/handler/text_message_handler';
import VoiceMessageHandler from '../js/handler/voice_message_handler';
import ImageMessageHandler from '../js/handler/image_message_handler';
import ForwardMessageHandler from '../js/handler/forward_message_handler';
 
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

import Viewer from 'viewerjs'   
import Pusher from 'pusher-js'  
import CryptoJS from 'crypto-js'; 
import TimeAgo from 'javascript-time-ago'; 

import en from 'javascript-time-ago/locale/en'
import 'emoji-picker-element'
import 'viewerjs/dist/viewer.css'  

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
                    'uid': this.uidValue 
                } 
            } 
        });

        this.page = 1
        this.pageSize = 20
        this.service = new Service()
        this.timeAgo = new TimeAgo('en-US')

        this.textMessageHandler = new TextMessageHandler()
        this.voiceMessageHandler = new VoiceMessageHandler()
        this.imageMessageHandler = new ImageMessageHandler()
        this.forwardMessageHandler = new ForwardMessageHandler()
   
        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = false
        this.usersOnlineMap = new Map()
        this.usersMap = new Map() 
        this.toSendImagesMap = new Map()
        this.ffmpeg = new FFmpeg()
        this.viewer = new Viewer(document.getElementById("viewerjs-images-container"))  
        this.isTyping = false
        this.typingTimeout = null

        await this.ffmpeg.load({
            coreURL: await toBlobURL('/ffmpeg-core.js', 'text/javascript'),
            wasmURL: await toBlobURL('/ffmpeg-core.wasm', 'application/wasm'),
        }) 

        const response = await this.service.getUsers(this.uidValue)
        if (response.ok) {
            const users = await response.json() 

            this.setDarkModeToggle() 
            this.setEmojiPickerElement() 
            this.setUserPusherPresenceChannel() 
            this.setChatboxEventListener() 
            this.setIsTypingNotification()
            
            this.textMessageHandler.setButtonClick() 
            this.textMessageHandler.setInputKeyDown() 
            this.voiceMessageHandler.setButtonClick() 
            this.voiceMessageHandler.setVoiceRecording()
            this.imageMessageHandler.setButtonClick() 
            this.imageMessageHandler.setFileInputOnChange() 
            this.imageMessageHandler.setFileInputButtonClick()
            
            users.forEach(async(user) => { 
                this.usersMap.set(user.id, user)
                
                this.forwardMessageHandler.setForwardMessage(user)
                await this.setSidebarUserClickEvent(user)
                await this.setUserPusherMessagesChannel(user) 
            }) 

            await this.setEncryptionDetails()  
            await this.setUserLastMessage()
            await this.setChatboxInfiniteScrolling()
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
        const avatar = this.usersMap.get(user.id).userDetails.avatar
        const channel = this.pusher.subscribe(`${user.id}-${this.currentUserValue.id}`)
        const typingElement = Utils.createIncomingIsTypingElement(avatar)
        
        const userLastMessage = document.getElementById(`user${user.id}-last-message`)
        let userLastMessageContent = userLastMessage.textContent

        channel.bind(`messages/${user.id}/${this.currentUserValue.id}`, async (data) => { 
            const { id, content, isSeen } = data
            const { sender, receiver } = JSON.parse(atob(content))
            const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver))
            
            if (messageData.sender == this.userToChatId) {
                let messageElement = null
                if (messageData.type == MessageType.TEXT) {
                    messageElement = Utils.createIncomingMessageTextElement(messageData.content, user.userDetails.avatar, messageData.timestamp, this.timeAgo)
                }
                else if (messageData.type == MessageType.AUDIO) {
                    messageElement = Utils.createIncomingMessageVoiceElement(messageData.content, user.userDetails.avatar, messageData.timestamp, this.timeAgo)
                }
                else if (messageData.type == MessageType.IMAGE) {
                    messageElement = Utils.createIncommingMessageImageElement(messageData.content, user.userDetails.avatar, messageData.timestamp, this.timeAgo)
                    Utils.setViewerJsImageElement(messageElement, this.viewer)
                } 
                
                this.setMessageElementAttribute(messageElement, id, messageData)

                Utils.chatboxScrollToBottom()
                chatbox.appendChild(messageElement)

                Utils.reOrderLastFourChatboxElements()
                Utils.setChatboxMessageAvatarHidden()
                Utils.setChatboxDividerTimestamp()
                Utils.setChatboxMessageBorderAndMargin()
            }

            if (messageData.type == MessageType.TEXT) {
                Utils.setUserLastMessageContent(messageData.sender, messageData.content)  
                messageElement.setAttribute('lastMessageContent', messageData.content) 
            }
            else if (messageData.type == MessageType.AUDIO) {
                const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an audio 🔊') 
                messageElement.setAttribute('lastMessageContent', firstname + ' sent an audio 🔊') 
            }
            else if (messageData.type == MessageType.IMAGE) {
                const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent a photo 🖼️') 
                messageElement.setAttribute('lastMessageContent', firstname + ' sent a photo 🖼️') 
            }

            Utils.setUserLastMessageTimestamp(messageData.sender, messageData.timestamp)
            Utils.setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(messageData.sender)
        })

        channel.bind(`typing/${user.id}/${this.currentUserValue.id}`, async (data) => {
            if (user.id == this.userToChatId) {   
                if (data == 'true') {
                    chatbox.appendChild(typingElement) 
                    Utils.chatboxScrollToBottom()
                }
                else {
                    try{
                        chatbox.removeChild(typingElement)      
                    } catch(e) { }
                }
            }

            if (data == 'true') { 
                userLastMessageContent = userLastMessage.textContent
                userLastMessage.classList.add('is-typing-loader', 'w-10') 
                userLastMessage.textContent = ''
            }
            else {    
                userLastMessage.classList.remove('is-typing-loader', 'w-10')  
                if (!userLastMessage.textContent) {
                    userLastMessage.textContent = userLastMessageContent
                }
            }
        })

        channel.bind(`delete_message/${user.id}/${this.currentUserValue.id}`, async (data) => {
            console.log(data)
        })

        await Utils.sleep(1)
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

    setIsTypingNotification = () => {
        const chatboxMessageInput = document.getElementById("chatbox-message-input")  
        chatboxMessageInput.addEventListener("keydown", async () => { 
            const isOnline = this.usersOnlineMap.get(this.userToChatId)
            if (!this.isTyping) {
                this.isTyping = true 
                if (isOnline) {
                    await this.service.sendTypingNotification(this.uidValue, `typing/${this.currentUserValue.id}/${this.userToChatId}`, `${this.currentUserValue.id}-${this.userToChatId}`, true)
                }
            }
            clearTimeout(this.typingTimeout)
        
            this.typingTimeout = setTimeout(async () => {
                this.isTyping = false
                if (isOnline) {
                    await this.service.sendTypingNotification(this.uidValue, `typing/${this.currentUserValue.id}/${this.userToChatId}`, `${this.currentUserValue.id}-${this.userToChatId}`, false)
                }
            }, 1000)
        });
        chatboxMessageInput.addEventListener("blur", async () => {
            const isOnline = this.usersOnlineMap.get(this.userToChatId)
            this.isTyping = false 
            if (isOnline) {
                await this.service.sendTypingNotification(this.uidValue, `typing/${this.currentUserValue.id}/${this.userToChatId}`, `${this.currentUserValue.id}-${this.userToChatId}`, false)
            }
        }) 
    }

    setSidebarUserClickEvent = async (user) => {
        const userElement = document.getElementById(`user${user.id}`) // sidebar user list element   
        userElement.onclick = async () => {
            const name = `${user.userDetails.firstname} ${user.userDetails.lastname}`
            const badge = user.userDetails.badge
            const badgeColor = user.userDetails.badgecolor
            const avatar = user.userDetails.avatar
            const publickey = user.userDetails.publickey.publickey 
            this.userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
            this.userToChatId = user.id
            this.isSidebarUserClickOnce = true

            this.setUserToChatName(name)
            this.setUserToChatAvatar(avatar) 
            this.setUserToChatBadge(badge, badgeColor)
            this.setSidebarUserToggleForMobile() 
            this.setMainChatbox()
            
            this.setDefaultValues()
            await this.setConversations()

            this.setUserToChatOnlineStatus()

            this.textMessageHandler.init(this.uidValue, this.currentUserValue, user.id, this.currentUserPublickey, this.usersMap, this.forwardMessageHandler)
            this.voiceMessageHandler.init(this.uidValue, this.currentUserValue, user.id, this.currentUserPublickey, this.ffmpeg, this.usersMap, this.forwardMessageHandler)
            this.imageMessageHandler.init(this.uidValue, this.currentUserValue, user.id, this.currentUserPublickey, this.viewer, this.ffmpeg, this.usersMap, this.forwardMessageHandler)
            this.forwardMessageHandler.init(this.textMessageHandler, this.voiceMessageHandler, this.imageMessageHandler, this.usersMap)
        } 

        await Utils.sleep(1)
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

                    if (messageData.type == MessageType.TEXT) {
                        Utils.setUserLastMessageContent(messageData.receiver, messageData.content) 
                    }
                    else if (messageData.type == MessageType.AUDIO) {  
                        Utils.setUserLastMessageContent(messageData.receiver, 'You sent an audio 🔊') 
                    }
                    else if (messageData.type == MessageType.IMAGE) {
                        Utils.setUserLastMessageContent(messageData.receiver, 'You sent a photo 🖼️') 
                    }

                    Utils.setUserLastMessageTimestamp(messageData.receiver, messageData.timestamp)
                    Utils.setUserLastMessageTimeAgo(messageData.receiver, messageData.timestamp, this.timeAgo) 
                } catch(e) {   
                    try {  
                        const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                        
                        if (messageData.type == MessageType.TEXT) {
                            Utils.setUserLastMessageContent(messageData.sender, messageData.content)  
                        } 
                        else if (messageData.type == MessageType.AUDIO) {
                            const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                            Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an audio 🔊') 
                        }
                        else if (messageData.type == MessageType.IMAGE) {
                            const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                            Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent a photo 🖼️') 
                        }
                        
                        Utils.setUserLastMessageTimestamp(messageData.sender, messageData.timestamp)
                        Utils.setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, this.timeAgo)
                    } catch(e) { }
                }
            } 

            
        }

        Utils.sortUsersListBaseOnLastMessageTimestamp()
    }

    setChatboxEventListener = () => {
        const chatbox = document.getElementById('chatbox-message-input') 

        chatbox.onblur = () => {  
            Utils.unHideMediaGroup()
        }

        chatbox.onfocus = () => { 
            Utils.hideMediaGroup()
        }
    }

    setChatboxInfiniteScrolling = async () => {
        const chatbox = document.getElementById('chatbox') 
        chatbox.onscroll = async () => {
            const scrollTop = chatbox.scrollTop; 
            if (scrollTop == 0 && !this.isReceivedFirstMessage && !this.isLockInfiniteScrolling) {
                this.page += 1   
                this.isLockInfiniteScrolling = true
                const flexGrowChild = chatbox.removeChild(chatbox.children[0])  

                let index = 0
                let firstChild = null
                while (index < chatbox.children.length) {
                    firstChild = chatbox.children[index] 
                    if (!firstChild.classList.contains('divider-timestamp')) {
                        break
                    }
                    index++
                }
                 
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
                                let messageElement = null
                                const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender)) 
                                
                                if (messageData.type == MessageType.TEXT) {
                                    messageElement = Utils.createOutgoingMessageTextElement(messageData.content, messageData.timestamp, this.timeAgo)
                                }
                                else if (messageData.type == MessageType.AUDIO) {
                                    messageElement = Utils.createOutgoingMessageVoiceElement(messageData.content, messageData.timestamp, this.timeAgo) 
                                }
                                else if (messageData.type == MessageType.IMAGE) {
                                    messageElement = Utils.createOutgoingMessageImageElement(messageData.content, messageData.timestamp, this.timeAgo) 
                                    Utils.setViewerJsImageElement(messageElement, this.viewer)
                                }      
 
                                this.setMessageElementAttribute(messageElement, id, messageData)

                                chatbox.prepend(messageElement)
                                const imgCheck = messageElement.querySelector('.img-check')
                                imgCheck.src = '/green_checks.svg'  

                            } catch(e) { 
                                let messageElement = null
                                const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                                
                                if (messageData.type == MessageType.TEXT) {
                                    messageElement = Utils.createIncomingMessageTextElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                                }
                                else if (messageData.type == MessageType.AUDIO) {
                                    messageElement = Utils.createIncomingMessageVoiceElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                                }
                                else if (messageData.type == MessageType.IMAGE) {
                                    messageElement = Utils.createIncommingMessageImageElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                                    Utils.setViewerJsImageElement(messageElement, this.viewer)
                                }
                                 
                                this.setMessageElementAttribute(messageElement, id, messageData)

                                chatbox.prepend(messageElement) 
                            }
                        } 

                        Utils.setChatboxMessageAvatarHidden()
                        Utils.setChatboxDividerTimestamp()
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
        } 

        await Utils.sleep(1)
    } 

    setDefaultValues = () => {
        this.page = 1 
        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = true 
        
        document.getElementById("viewerjs-images-container").innerHTML = '' 
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
                    let messageElement = null
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, sender))   
                    if (messageData.type == MessageType.TEXT) {
                        messageElement = Utils.createOutgoingMessageTextElement(messageData.content, messageData.timestamp, this.timeAgo) 
                        messageElement.setAttribute('lastMessageContent', messageData.content) 
                    }
                    else if (messageData.type == MessageType.AUDIO) { 
                        messageElement = Utils.createOutgoingMessageVoiceElement(messageData.content, messageData.timestamp, this.timeAgo) 
                        messageElement.setAttribute('lastMessageContent', 'You sent an audio 🔊') 
                    }
                    else if (messageData.type == MessageType.IMAGE) {
                        messageElement = Utils.createOutgoingMessageImageElement(messageData.content, messageData.timestamp, this.timeAgo) 
                        messageElement.setAttribute('lastMessageContent', 'You sent a photo 🖼️') 
                        Utils.setViewerJsImageElement(messageElement, this.viewer)
                    }
                     
                    this.setMessageElementAttribute(messageElement, id, messageData)

                    chatbox.appendChild(messageElement)
                    const imgCheck = messageElement.querySelector('.img-check')
                    imgCheck.classList.add('hidden')
                    //imgCheck.src = '/green_checks.svg'  
                     
                } catch(e) { 
                    let messageElement = null
                    const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                    if (messageData.type == MessageType.TEXT) { 
                        messageElement = Utils.createIncomingMessageTextElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                    }
                    else if (messageData.type == MessageType.AUDIO) {
                        messageElement = Utils.createIncomingMessageVoiceElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                        const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                        messageElement.setAttribute('lastMessageContent', firstname + ' sent an audio 🔊') 
                    }
                    else if ( messageData.type == MessageType.IMAGE) {
                        messageElement = Utils.createIncommingMessageImageElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                        const firstname = this.usersMap.get(messageData.sender).userDetails.firstname.split(' ')[0]
                        messageElement.setAttribute('lastMessageContent', firstname + ' sent a photo 🖼️') 
                        Utils.setViewerJsImageElement(messageElement, this.viewer)
                    }
                     
                    this.setMessageElementAttribute(messageElement, id, messageData)

                    chatbox.appendChild(messageElement)  
                }
            } 
            Utils.chatboxScrollToBottom(true)

            hasMessages = messages.length ? true : false
        }

        this.isLockInfiniteScrolling = false
        chatbox.removeChild(loader) 
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin() 
        
        if (!hasMessages) {
            const user = this.usersMap.get(this.userToChatId)
            const name = `${user.userDetails.firstname} ${user.userDetails.lastname}`
            const avatar = user.userDetails.avatar
            Utils.setIntroductionElement(name, avatar)
        }
    }

    setUserToChatName = (name) => {
        const userToChatName = document.getElementById('user-to-chat-name')
        userToChatName.textContent = name
    }

    setUserToChatAvatar = (avatar) => {
        const userToChatAvatar = document.getElementById('usertochat-avatar')
        userToChatAvatar.style.backgroundImage = `url('${avatar}')`
    }

    setUserToChatBadge = (badge, badgeColor) => {
        const spanBadge = document.getElementById('user-to-chat-badge')
        if (badge) {
            spanBadge.classList.remove('hidden')
            spanBadge.classList.add(`text-${badgeColor}-600`) 
        }
        else {
            spanBadge.classList.add('hidden')
            spanBadge.classList.remove(`text-${badgeColor}-600`) 
        }
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

    setMessageElementAttribute = (messageElement, id, messageData) => {
        messageElement.setAttribute('uid', this.uidValue) 
        messageElement.setAttribute('messageId', id)
        messageElement.setAttribute('messageData', JSON.stringify(messageData))
        messageElement.setAttribute('currentUserId', this.currentUserValue.id)
        messageElement.copyTextMessageCallback = this.forwardMessageHandler.copyTextMessageCallback
        messageElement.forwardMessageCallback = this.forwardMessageHandler.forwardMessageCallback
        messageElement.deleteMessageCallback = this.service.deleteMessage 
    }

    setDarkModeToggle = () => { 
        let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        let emojiPicker = document.querySelector('.emoji-picker')

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
            document.documentElement.classList.add('dark');

            emojiPicker.classList.remove('light')
            emojiPicker.classList.add('dark')
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.classList.remove('dark');

            emojiPicker.classList.add('light')
            emojiPicker.classList.remove('dark')
        } 
 
        var themeToggleBtn = document.getElementById('theme-toggle');

        themeToggleBtn.onclick = () => {
            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');

                    emojiPicker.classList.remove('light')
                    emojiPicker.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');

                    emojiPicker.classList.add('light')
                    emojiPicker.classList.remove('dark')
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
        } 
    }

    setEmojiPickerElement = () => {   
        const chatbox = document.getElementById('chatbox-message-input')
        document.querySelector('emoji-picker').addEventListener('emoji-click', (e) => {   
            const caretPosition = Utils.saveCaretPosition(chatbox)
            chatbox.innerHTML = chatbox.innerHTML.substring(0, caretPosition) + e.detail.unicode + chatbox.innerHTML.substring(caretPosition)
            Utils.restoreCaretPosition(chatbox, caretPosition + e.detail.unicode.length)
        })
    }

    setSidebarUserToggleForMobile = () => { 
        if (Utils.getUserAgentPlatformType() == 'mobile') {
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
}

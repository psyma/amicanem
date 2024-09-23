import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   
 
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

import Viewer from 'viewerjs'   
import Pusher from 'pusher-js'  
import CryptoJS from 'crypto-js';
import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import TimeAgo from 'javascript-time-ago';
import heic2any from 'heic2any';

import en from 'javascript-time-ago/locale/en'
import 'emoji-picker-element'
import 'viewerjs/dist/viewer.css' 

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
                    'uid': this.uidValue 
                } 
            } 
        });

        this.page = 1
        this.pageSize = 20
        this.service = new Service()
        this.timeAgo = new TimeAgo('en-US')

        this.audioBlob = null
        this.isVoiceRecording = false
        this.isCloseVoiceRecording = true
        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = false
        this.usersOnlineMap = new Map()
        this.usersMap = new Map() 
        this.toSendImagesMap = new Map()
        this.ffmpeg = new FFmpeg()
        this.viewer = new Viewer(document.getElementById("viewerjs-images-container"))  
        this.forwardUserMessageType = null
        this.forwardUserMessageContent = null
        this.forwardUserMessageBlob = null
        this.forwardUserMessageInput = null
        this.forwardUserMessageWidth = null
        this.forwardUserMessageHeight = null
        this.forwardUserMessageMimeType = null
        this.forwardUserMessageExtension = null
        this.forwardUserMessageOutput = null

        await this.ffmpeg.load({
            coreURL: await toBlobURL('/ffmpeg-core.js', 'text/javascript'),
            wasmURL: await toBlobURL('/ffmpeg-core.wasm', 'application/wasm'),
        }) 

        const response = await this.service.getUsers(this.uidValue)
        if (response.ok) {
            const users = await response.json() 

            this.setDarkModeToggle() 
            this.setEmojiPickerElement()
            this.setImageButtonClick()
            this.setOnChangeImageFileInput()
            this.setSendTextButtonClick()
            this.setSendVoiceButtonClick()
            this.setSendImageButtonClick()
            this.setUserPusherPresenceChannel()
            this.setSendMessageChatboxInputKeyDown()
            this.setVoiceChatRecording()
            this.setChatboxEventListener() 

            users.forEach(async(user) => { 
                this.usersMap.set(user.id, user)

                this.setForwardUserMessage(user)
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
        const channel = this.pusher.subscribe(`${user.id}-${this.currentUserValue.id}`)

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

                messageElement.setAttribute('messageId', id)
                messageElement.setAttribute('messageData', JSON.stringify(messageData))
                messageElement.copyTextMessageCallback = this.copyTextMessageCallback
                messageElement.forwardMessageCallback = this.forwardMessageCallback

                this.chatboxScrollToBottom()
                chatbox.appendChild(messageElement)

                Utils.reOrderLastFourChatboxElements()
                Utils.setChatboxMessageAvatarHidden()
                Utils.setChatboxDividerTimestamp()
                Utils.setChatboxMessageBorderAndMargin()
            }

            if (messageData.type == MessageType.TEXT) {
                Utils.setUserLastMessageContent(messageData.sender, messageData.content)  
            }
            else if (messageData.type == MessageType.AUDIO) {
                const firstname = this.usersMap.get(messageData.sender).userDetails.firstname
                Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an audio') 
            }
            else if (messageData.type == MessageType.IMAGE) {
                const firstname = this.usersMap.get(messageData.sender).userDetails.firstname
                Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an image') 
            }

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

    setVoiceChatRecording = () => { 
        const voiceChatRecordButton = document.getElementById('voicechat-record-button')
        voiceChatRecordButton.onclick = async () => { 
            if (!this.toSendImagesMap.size) { 
                const waveFormContainer = document.getElementById('waveform-input')
                waveFormContainer.textContent = ''

                var wavesurfer = WaveSurfer.create({
                    container: waveFormContainer,
                    waveColor: 'rgb(200, 0, 200)', 
                    hideScrollbar: true,   
                    autoCenter: true,
                    height: 30,
                    barHeight: 25, 
                    barWidth: 1.5,
                    cursorWidth: 0, 
                })

                this.audioBlob = null
                this.isVoiceRecording = true
                this.isCloseVoiceRecording = false
                const MAX_RECORDING_LIMIT = 60
                const chatboxMessageInput = document.getElementById('chatbox-message-input')
                const sendTextButton = document.getElementById('send-text-button')
                const sendVoiceButton = document.getElementById('send-voice-button')
                const voiceChatRecordInput = document.getElementById('chatbox-voice-input')
                const voiceChatRecordTime = document.getElementById('voicechat-record-time')
                const voiceChatRecordStart = document.getElementById('voicechat-record-start')
                const voiceChatRecordSvgPlay = document.getElementById('voicechat-record-svg-play')
                const voiceChatRecordSvgStop = document.getElementById('voicechat-record-svg-stop')
                const voiceChatRecordDelete = document.getElementById('voicechat-record-delete')
                const voiceChatRecordClose = document.getElementById('voicechat-record-close')

                chatboxMessageInput.classList.add('hidden')
                voiceChatRecordInput.classList.remove('hidden')
                sendTextButton.classList.add('hidden')
                sendVoiceButton.classList.remove('hidden')

                wavesurfer.empty()
                const record = wavesurfer.registerPlugin(RecordPlugin.create({ scrollingWaveform: false, renderRecordedAudio: false }))
                record.on('record-end', async (blob) => {   
                    const recordedUrl = URL.createObjectURL(blob) 
                    
                    wavesurfer.destroy() 
                    wavesurfer = WaveSurfer.create({
                        container: waveFormContainer,
                        waveColor: 'rgb(200, 0, 200)', 
                        progressColor: 'rgb(100, 50, 0)',
                        hideScrollbar: true,   
                        autoCenter: true,
                        height: 30,
                        barHeight: 25, 
                        barWidth: 1.5,
                        cursorWidth: 0, 
                        url: recordedUrl
                    }) 
                    
                    voiceChatRecordStart.onclick = () => wavesurfer.playPause()   

                    wavesurfer.on('pause', () => { 
                        voiceChatRecordSvgPlay.classList.remove('hidden')
                        voiceChatRecordSvgStop.classList.add('hidden')
                    })

                    wavesurfer.on('play', () => {
                        voiceChatRecordSvgPlay.classList.add('hidden')
                        voiceChatRecordSvgStop.classList.remove('hidden')
                    }) 

                    wavesurfer.on('timeupdate', (currentTime) => { 
                        const remainingTime = Math.abs(wavesurfer.getDuration() - currentTime)
                        const minutes = Math.floor(remainingTime / 60)
                        const seconds = Math.floor(remainingTime % 60)
                        const formattedTime = `0${minutes}:${seconds.toString().padStart(2, '0')}`
                        voiceChatRecordTime.textContent = formattedTime
                    })

                    wavesurfer.on('finish', ( ) => {
                        wavesurfer.seekTo(0)
                    })

                    this.audioBlob = blob  
                    this.isVoiceRecording = false
                })

                record.on('record-progress', (time) => {   
                    if (parseInt((time) / 1000) >= MAX_RECORDING_LIMIT + 1) {
                        voiceChatRecordStart.click()
                    }
                    else {
                        const formattedTime = [
                            Math.floor((time % 3600000) / 60000),
                            Math.floor((time % 60000) / 1000),
                        ].map((v) => (v < 10 ? '0' + v : v)).join(':')
                        voiceChatRecordTime.textContent = formattedTime 
                    }
                })  

                voiceChatRecordStart.onclick = () => {
                    record.stopRecording()

                    voiceChatRecordSvgPlay.classList.remove('hidden')
                    voiceChatRecordSvgStop.classList.add('hidden')
                    voiceChatRecordDelete.classList.remove('hidden')
                    voiceChatRecordClose.classList.add('hidden')
                }

                voiceChatRecordDelete.onclick = async () => {
                    voiceChatRecordSvgPlay.classList.add('hidden')
                    voiceChatRecordSvgStop.classList.remove('hidden')
                    voiceChatRecordDelete.classList.add('hidden')
                    voiceChatRecordClose.classList.remove('hidden')

                    wavesurfer.empty()
                    wavesurfer.destroy() 

                    voiceChatRecordButton.click()
                    await record.startRecording() 
                }

                voiceChatRecordClose.onclick = () => {  
                    this.isVoiceRecording = false
                    this.isCloseVoiceRecording = true

                    wavesurfer.empty()
                    wavesurfer.destroy() 

                    record.destroy()
                    Utils.unHideMediaGroup()

                    chatboxMessageInput.classList.remove('hidden')
                    voiceChatRecordInput.classList.add('hidden') 
                    sendTextButton.classList.remove('hidden')
                    sendVoiceButton.classList.add('hidden')
                    record.stopRecording()
                }

                Utils.hideMediaGroup()
                await record.startRecording() 
            }
        }  
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
                        Utils.setUserLastMessageContent(messageData.receiver, 'You sent an audio') 
                    }
                    else if (messageData.type == MessageType.IMAGE) {
                        Utils.setUserLastMessageContent(messageData.receiver, 'You sent an image') 
                    }

                    Utils.setUserLastMessageTimestamp(messageData.receiver, messageData.timestamp)
                    Utils.setUserLastMessageTimeAgo(messageData.receiver, messageData.timestamp, this.timeAgo)
                } catch(e) {  
                    try{

                        const messageData = JSON.parse(await Utils.decryptMessage(this.currentUserPrivatekey, receiver)) 
                        if (messageData.type == MessageType.TEXT) {
                            Utils.setUserLastMessageContent(messageData.sender, messageData.content) 
                        } 
                        else if (messageData.type == MessageType.AUDIO) {
                            const firstname = this.usersMap.get(messageData.sender).userDetails.firstname
                            Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an audio') 
                        }
                        else if (messageData.type == MessageType.IMAGE) {
                            const firstname = this.usersMap.get(messageData.sender).userDetails.firstname
                            Utils.setUserLastMessageContent(messageData.sender, firstname + ' sent an image') 
                        }
                        
                        Utils.setUserLastMessageTimestamp(messageData.sender, messageData.timestamp)
                        Utils.setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, this.timeAgo) 
                    }catch(ee) { 
                    }
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

                                messageElement.setAttribute('messageId', id)
                                messageElement.setAttribute('messageData', JSON.stringify(messageData))
                                messageElement.copyTextMessageCallback = this.copyTextMessageCallback
                                messageElement.forwardMessageCallback = this.forwardMessageCallback

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
                                
                                messageElement.setAttribute('messageId', id)
                                messageElement.setAttribute('messageData', JSON.stringify(messageData))
                                messageElement.copyTextMessageCallback = this.copyTextMessageCallback
                                messageElement.forwardMessageCallback = this.forwardMessageCallback

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

        await this.sleep(1)
    }

    setForwardUserMessage = (user) => {
        const forwardUserSvgSent = document.getElementById(`forward-user-svg-sent-${user.id}`)
        const forwardUserSvgDefault = document.getElementById(`forward-user-svg-default-${user.id}`)
        const forwardUserSpanText = document.getElementById(`forward-user-span-text-${user.id}`)
        const forwadUserButton = document.getElementById(`forward-user-button-${user.id}`)

        forwadUserButton.onclick = async () => {   
            forwadUserButton.setAttribute('disabled', '')
            forwadUserButton.classList.add("cursor-not-allowed")
            forwardUserSvgSent.classList.remove('hidden')
            forwardUserSvgDefault.classList.add('hidden')
            forwardUserSpanText.textContent = 'Sent'

            if (this.forwardUserMessageType == MessageType.TEXT) {
                await this.sendTextMessage(user.id, this.forwardUserMessageContent)
            }
            else if (this.forwardUserMessageType == MessageType.AUDIO) {
                await this.sendVoiceMessage(user.id, this.forwardUserMessageBlob)
            }
            else if (this.forwardUserMessageType == MessageType.IMAGE) {
                await this.sendImageMessage(user.id, this.forwardUserMessageBlob, this.forwardUserMessageInput, this.forwardUserMessageWidth, this.forwardUserMessageHeight, this.forwardUserMessageMimeType, this.forwardUserMessageExtension, this.forwardUserMessageOutput)
            } 
        }
    }

    setDefaultValues = () => {
        this.page = 1 
        this.isReceivedFirstMessage = false
        this.isLockInfiniteScrolling = true 
        
        document.getElementById("viewerjs-images-container").innerHTML = '' 
    } 

    copyTextMessageCallback = async (content) => {
        await navigator.clipboard.writeText(content)
    }

    forwardMessageCallback = (type, content, blob, input, width, height, mimeType, extension, output) => {
        this.forwardUserMessageType = type
        this.forwardUserMessageContent = content
        this.forwardUserMessageBlob = blob
        this.forwardUserMessageInput = input
        this.forwardUserMessageWidth = width
        this.forwardUserMessageHeight = height
        this.forwardUserMessageMimeType = mimeType
        this.forwardUserMessageExtension = extension
        this.forwardUserMessageOutput = output 

        Utils.setForwardUserUiDefaults(this.usersMap)
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
                    }
                    else if (messageData.type == MessageType.AUDIO) { 
                        messageElement = Utils.createOutgoingMessageVoiceElement(messageData.content, messageData.timestamp, this.timeAgo) 
                    }
                    else if (messageData.type == MessageType.IMAGE) {
                        messageElement = Utils.createOutgoingMessageImageElement(messageData.content, messageData.timestamp, this.timeAgo) 
                        Utils.setViewerJsImageElement(messageElement, this.viewer)
                    }
                    
                    messageElement.setAttribute('messageId', id)
                    messageElement.setAttribute('messageData', JSON.stringify(messageData))
                    messageElement.copyTextMessageCallback = this.copyTextMessageCallback
                    messageElement.forwardMessageCallback = this.forwardMessageCallback

                    chatbox.appendChild(messageElement)
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
                    else if ( messageData.type == MessageType.IMAGE) {
                        messageElement = Utils.createIncommingMessageImageElement(messageData.content, this.usersMap.get(messageData.sender).userDetails.avatar, messageData.timestamp, this.timeAgo)
                        Utils.setViewerJsImageElement(messageElement, this.viewer)
                    }
                    
                    messageElement.setAttribute('messageId', id)
                    messageElement.setAttribute('messageData', JSON.stringify(messageData))
                    messageElement.copyTextMessageCallback = this.copyTextMessageCallback
                    messageElement.forwardMessageCallback = this.forwardMessageCallback

                    chatbox.appendChild(messageElement)  
                }
            } 
            this.chatboxScrollToBottom(true)

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

    setSentMessage = async (receiver, content, messageElement, message, type, timestamp, oldMessageElement=null) => {
        const chatbox = document.getElementById('chatbox') 
        
        this.chatboxScrollToBottom(true) 
        if (parseInt(this.userToChatId) == parseInt(receiver)) {
            if (oldMessageElement) {
                chatbox.replaceChild(messageElement, oldMessageElement)
            }
            else {
                chatbox.appendChild(messageElement) 
            }
        }

        Utils.reOrderLastFourChatboxElements()
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin()  

        const response = await this.service.createTextMessage(this.uidValue, `messages/${this.currentUserValue.id}/${receiver}`, `${this.currentUserValue.id}-${receiver}`, this.currentUserValue.id, receiver, MessageType.TEXT, content, timestamp, true)
        const imgCheck = messageElement.querySelector('.img-check')
        if (response.ok) { 
            const messageData = await response.json()
            const id = messageData.id
            messageElement.setAttribute('messageId', id)
         
            if (type == MessageType.TEXT) {
                Utils.setUserLastMessageContent(receiver, message) 
            }
            else if (type == MessageType.AUDIO) {
                Utils.setUserLastMessageContent(receiver, 'You sent an audio') 
            }
            else if (type == MessageType.IMAGE) {
                Utils.setUserLastMessageContent(receiver, 'You sent an image') 
            }
            Utils.setUserLastMessageTimestamp(receiver, timestamp)
            Utils.setUserLastMessageTimeAgo(receiver, timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(receiver)
            imgCheck.src = '/green_checks.svg'
        }
        else {
            imgCheck.src = '/red_checks.svg'
        }
    }

    sendTextMessage = async (receiver, message) => {
        const chatboxMessageInput = document.getElementById('chatbox-message-input')
        
        chatboxMessageInput.textContent = ''
        const type = MessageType.TEXT
        const timestamp = Date.now()

        const data = JSON.stringify({
            sender: this.currentUserValue.id,
            receiver: receiver,
            type: type,
            content: message,
            timestamp: timestamp
        })

        const userTochatPublickey = Utils.base64ToArrayBuffer(this.usersMap.get(receiver).userDetails.publickey.publickey)
        const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
        const encryptedReceiverTextMessage = await Utils.encryptMessage(userTochatPublickey, data) 
        const content = btoa(JSON.stringify({
            sender: encryptedSenderTextMessage,
            receiver: encryptedReceiverTextMessage
        }))

        const messageElement = Utils.createOutgoingMessageTextElement(message, timestamp, this.timeAgo)
        messageElement.setAttribute('messageData', data)
        messageElement.copyTextMessageCallback = this.copyTextMessageCallback
        messageElement.forwardMessageCallback = this.forwardMessageCallback
        await this.setSentMessage(receiver, content, messageElement, message, type, timestamp)
    } 

    sendVoiceMessage = async (receiver, blob) => { 
        this.audioBlob = null
  
        const voiceChatRecordDelete = document.getElementById('voicechat-record-delete')
        const voiceChatRecordClose = document.getElementById('voicechat-record-close')
        voiceChatRecordDelete.click()
        voiceChatRecordClose.click()

        const url = URL.createObjectURL(blob)
        const chatbox = document.getElementById('chatbox') 
        const messageTempElement = Utils.createOutgoingMessageVoiceElement(url, Date.now(), this.timeAgo)
        this.chatboxScrollToBottom(true)
        if (parseInt(this.userToChatId) == parseInt(receiver)) { 
            chatbox.appendChild(messageTempElement) 
        }
 
        await this.ffmpeg.writeFile('input.webm', new Uint8Array(await blob.arrayBuffer()))
        await this.ffmpeg.exec(['-i', 'input.webm', '-c:a', 'libopus', '-b:a', '0', 'output.webm']);
        const file = new File([await this.ffmpeg.readFile('output.webm')], 'audio.webm', { type: 'audio/webm' }) 
        const response = await this.service.createAudioMessage(this.uidValue, file, messageTempElement, Utils.progressSvgElementCallback) 

        if (response.status == 200) {   
            const type = MessageType.AUDIO
            const timestamp = Date.now()

            const data = JSON.stringify({
                sender: this.currentUserValue.id,
                receiver: receiver,
                type: type,
                content: response.data,
                timestamp: timestamp
            }) 

            const userTochatPublickey = Utils.base64ToArrayBuffer(this.usersMap.get(receiver).userDetails.publickey.publickey)
            const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
            const encryptedReceiverTextMessage = await Utils.encryptMessage(userTochatPublickey, data) 
            const content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
            }))
 
            const messageElement = Utils.createOutgoingMessageVoiceElement(url, timestamp, this.timeAgo)
            messageElement.setAttribute('messageData', data)
            messageElement.copyTextMessageCallback = this.copyTextMessageCallback
            messageElement.forwardMessageCallback = this.forwardMessageCallback
            await this.setSentMessage(receiver, content, messageElement, null, type, timestamp, messageTempElement)
        }
    }

    sendImageMessage = async (receiver, blob, input, width, height, mimeType, extension, output) => {
        let file = null 
        let url = URL.createObjectURL(blob)
        file = new File([new Uint8Array(await blob.arrayBuffer())], output, { type: mimeType }) 
        /*
        if (extension == 'png') {
            await this.ffmpeg.writeFile(input, new Uint8Array(await blob.arrayBuffer()))
            await this.ffmpeg.exec(['-i', input, '-vf', `scale=${width}:${height}`, output]);
            file = new File([await this.ffmpeg.readFile(output)], output, { type: mimeType })  
        }
        else if (extension == 'GIF') {
            file = new File([new Uint8Array(await blob.arrayBuffer())], output, { type: mimeType }) 
        }
        else if (extension == "heic") {
            const heicBlob = await heic2any({ blob, toType: 'image/jpeg'}) 
            url = URL.createObjectURL(heicBlob)
            
            await this.ffmpeg.writeFile('input.jpeg', new Uint8Array(await heicBlob.arrayBuffer()))
            await this.ffmpeg.exec(['-i', 'input.jpeg', '-pix_fmt', 'yuv420p', '-vf', `scale=${width}:${height}`, 'output.jpeg']);
            file = new File([await this.ffmpeg.readFile('output.jpeg')], 'output.jpeg', { type: 'image/jpeg' })  
        }
        else {
            await this.ffmpeg.writeFile(input, new Uint8Array(await blob.arrayBuffer()))
            await this.ffmpeg.exec(['-i', input, '-pix_fmt', 'yuv420p', '-vf', `scale=${width}:${height}`, output]);
            file = new File([await this.ffmpeg.readFile(output)], output, { type: mimeType }) 
        } 
            */
        
        const chatbox = document.getElementById('chatbox') 
        const messageTempElement = Utils.createOutgoingMessageImageElement(url, Date.now(), this.timeAgo)  
        this.chatboxScrollToBottom(true)
        if (parseInt(this.userToChatId) == parseInt(receiver)) {
            chatbox.appendChild(messageTempElement) 
        }

        const response = await this.service.createImageMessage(this.uidValue, file, extension == 'heic' ? 'jpeg' : extension, messageTempElement, Utils.progressSvgElementCallback)
        if (response.status == 200) { 
            const type = MessageType.IMAGE
            const timestamp = Date.now()

            const data = JSON.stringify({
                sender: this.currentUserValue.id,
                receiver: receiver,
                type: type,
                content: response.data,
                timestamp: timestamp
            })

            const userTochatPublickey = Utils.base64ToArrayBuffer(this.usersMap.get(receiver).userDetails.publickey.publickey)
            const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
            const encryptedReceiverTextMessage = await Utils.encryptMessage(userTochatPublickey, data) 
            const content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
            })) 

            const messageElement = Utils.createOutgoingMessageImageElement(url, timestamp, this.timeAgo) 
            messageElement.setAttribute('messageData', data)
            messageElement.copyTextMessageCallback = this.copyTextMessageCallback
            messageElement.forwardMessageCallback = this.forwardMessageCallback
            Utils.setViewerJsImageElement(messageElement, this.viewer)
            await this.setSentMessage(receiver, content, messageElement, null, type, timestamp, messageTempElement) 
        }
    }

    setOnChangeImageFileInput = () => { 
        const imageFileInput = document.getElementById('image-file-input')
        imageFileInput.onchange = async (e) => { 
            const files = e.target.files
            const chatboxMessageInput = document.getElementById('chatbox-message-input') 
            const chatboxVoiceInput = document.getElementById('chatbox-voice-input')
            const chatboxImageInput = document.getElementById('chatbox-image-input')
            const sendTextButton = document.getElementById('send-text-button')
            const sendVoiceButton = document.getElementById('send-voice-button')
            const sendImageButton = document.getElementById('send-image-button') 
            
            chatboxImageInput.innerHTML = ''
            if (files.length) { 
                Utils.hideMediaGroup()
                chatboxMessageInput.classList.add('hidden')
                chatboxVoiceInput.classList.add('hidden')
                chatboxImageInput.classList.remove('hidden')
                sendTextButton.classList.add('hidden')
                sendVoiceButton.classList.add('hidden')
                sendImageButton.classList.remove('hidden')

                for (let i = 0; i < files.length; i++) {
                    const file = files[i]
                    this.toSendImagesMap.set(i, {
                        'file': file,
                        'width': null,
                        'height': null
                    })
                    // Create a container div for image and close button
                    const imageContainer = document.createElement('div');
                    imageContainer.style.position = 'relative';
                    imageContainer.style.display = 'inline-block';
                    imageContainer.style.margin = '5px';

                    // Create the img element
                    const img = document.createElement('img');
                    img.setAttribute('mimeType', file.type)
                    img.setAttribute('key', i)
                    img.classList.add('image')
                    img.style.width = '50px';
                    img.style.height = '50px';
                    img.style.objectFit = 'fill'

                    // Read the file as a Data URL
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const fakeImg = document.createElement('img')
                        fakeImg.src = event.target.result
                        fakeImg.onload = () => { 
                            this.toSendImagesMap.set(i, {
                                'file': file,
                                'width': fakeImg.width,
                                'height': fakeImg.height
                            })
                        }

                        img.src = event.target.result;
                    };

                    // Read the image file
                    reader.readAsDataURL(file);

                    // Create a close button
                    const closeButton = document.createElement('button');
                    closeButton.innerHTML = '&times;';
                    closeButton.style.position = 'absolute';
                    closeButton.style.top = '0';
                    closeButton.style.right = '0';
                    closeButton.style.backgroundColor = 'rgb(234 63 63)';
                    closeButton.style.color = 'white';
                    closeButton.style.border = 'none';
                    closeButton.style.borderRadius = '50%';
                    closeButton.style.cursor = 'pointer';
                    closeButton.style.width = '25px';
                    closeButton.style.height = '25px';
                    closeButton.style.fontSize = '14px';
                    closeButton.style.lineHeight = '25px';  // Set line-height to match the button height for vertical centering
                    closeButton.style.textAlign = 'center';

                    // Add event listener to remove the imageContainer on click
                    closeButton.onclick = () => {
                        this.toSendImagesMap.delete(i)
                        chatboxImageInput.removeChild(imageContainer); 

                        if (!this.toSendImagesMap.size) {
                            chatboxMessageInput.classList.remove('hidden')
                            chatboxVoiceInput.classList.add('hidden')
                            chatboxImageInput.classList.add('hidden')
                            sendTextButton.classList.remove('hidden')
                            sendVoiceButton.classList.add('hidden')
                            sendImageButton.classList.add('hidden')
                        }
                    };

                    // Append the img and close button to the container
                    imageContainer.appendChild(img);
                    imageContainer.appendChild(closeButton);

                    // Append the container to the chatboxInput div
                    chatboxImageInput.appendChild(imageContainer);
                }   
            } 
        }
    }

    setImageButtonClick = () => {
        const imageInputButton = document.getElementById('image-input-button')

        imageInputButton.onclick = () => { 
            if (!this.isVoiceRecording && this.isCloseVoiceRecording) { 
                const imageFileInput = document.getElementById('image-file-input')
                imageFileInput.click()
            }
        }
    }

    setSendTextButtonClick = () => { 
        const chatboxMessageInput = document.getElementById('chatbox-message-input')
        const sendTextButton = document.getElementById('send-text-button')

        sendTextButton.onclick = async () => {
            const message = chatboxMessageInput.innerText.trim()  
            if (!this.isEmptyOrSpaces(message)) { 
                await this.sendTextMessage(this.userToChatId, message)
            }  
        }
    }

    setSendVoiceButtonClick = () => { 
        const sendVoiceButton = document.getElementById('send-voice-button')
        sendVoiceButton.onclick = async () => {  
            if(this.audioBlob != null && !this.isVoiceRecording) {  
                await this.sendVoiceMessage(this.userToChatId, this.audioBlob)
            }
        }
    }

    setSendImageButtonClick = () => { 
        const chatboxMessageInput = document.getElementById('chatbox-message-input') 
        const chatboxVoiceInput = document.getElementById('chatbox-voice-input')
        const chatboxImageInput = document.getElementById('chatbox-image-input')
        const sendTextButton = document.getElementById('send-text-button') 
        const sendVoiceButton = document.getElementById('send-voice-button') 
        const sendImageButton = document.getElementById('send-image-button') 

        sendImageButton.onclick = () => {  
            if (!Utils.isTotalImagesToSendNotExceeded(this.toSendImagesMap.size)) { return }
            if (!Utils.isImageFilesizeNotExceeded(Array.from(this.toSendImagesMap))) { return }

            this.toSendImagesMap.forEach(async (value, key) => { 
                const blob = value['file']
                const input = value['file'].name
                const width = Math.floor(value['width'] * .75)
                const height = Math.floor(value['height'] * .75)
                const mimeType = value['file'].type
                const extension = mimeType.split("/")[1] 
                const output = CryptoJS.MD5(Utils.generateRandomString(16)).toString() + "." + extension
                
                await this.sendImageMessage(this.userToChatId, blob, input, width, height, mimeType, extension, output)
            })

            Utils.unHideMediaGroup()
            this.toSendImagesMap = new Map()
            chatboxImageInput.innerHTML = ''

            chatboxMessageInput.classList.remove('hidden')
            chatboxVoiceInput.classList.add('hidden')
            chatboxImageInput.classList.add('hidden')
            sendTextButton.classList.remove('hidden')
            sendVoiceButton.classList.add('hidden')
            sendImageButton.classList.add('hidden')
        }
    }

    setSendMessageChatboxInputKeyDown = () => { 
        const chatboxMessageInput = document.getElementById('chatbox-message-input')
        chatboxMessageInput.onkeydown = async (e) => {
            const message = e.target.innerText.trim()
            if (Utils.getUserAgentPlatformType() == 'desktop') {
                if (e.key === 'Enter' && !e.shiftKey) {  
                    e.preventDefault()
                    
                    if (!this.isEmptyOrSpaces(message)) {
                        await this.sendTextMessage(this.userToChatId, message)
                    } 
                }
            }
        }
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

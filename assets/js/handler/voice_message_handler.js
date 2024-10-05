import Utils from '../utils/utils';
import Service from '../../service/service';
import MessageType from '../types/message_type';

import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import TimeAgo from 'javascript-time-ago'; 

export default class VoiceMessageHandler {
    constructor() {
        this.uid = null
        this.ffmpeg = null
        this.currentUser = null
        this.userToChatId = null
        this.currentUserPublickey = null
        this.forwardMessageHandler = null
        this.usersMap = new Map()
        this.timeAgo = new TimeAgo('en-US')
        this.service = new Service()

        this.audioBlob = null
        this.isVoiceRecording = false
    }

    init = (uid, currentUser, userToChatId, currentUserPublickey, ffmpeg, usersMap, forwardMessageHandler) => {
        this.uid = uid
        this.currentUser = currentUser
        this.userToChatId = userToChatId
        this.currentUserPublickey = currentUserPublickey
        this.forwardMessageHandler = forwardMessageHandler
        this.usersMap = usersMap
        this.ffmpeg = ffmpeg

        this.audioBlob = null 
    }

    setButtonClick = () => {
        const sendVoiceButton = document.getElementById('send-voice-button')
        sendVoiceButton.onclick = async () => {  
            if(this.audioBlob != null && !this.isVoiceRecording) {  
                await this.sendMessage(this.userToChatId, this.audioBlob) 
            }
        }
    } 

    setVoiceRecording = () => { 
        const voiceChatRecordButton = document.getElementById('voicechat-record-button')
        
        voiceChatRecordButton.onclick = async () => {  
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
            const chatboxMessageContainer = document.getElementById('chatbox-message-container')
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
            chatboxMessageContainer.classList.add('hidden')
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
                chatboxMessageContainer.classList.remove('hidden')
                voiceChatRecordInput.classList.add('hidden') 
                sendTextButton.classList.remove('hidden')
                sendVoiceButton.classList.add('hidden')
                record.stopRecording()
            }

            Utils.hideMediaGroup()
            await record.startRecording()  
        }  
    }
    
    sendMessage = async (userToChatId, blob) => {
        this.audioBlob = null

        const voiceChatRecordDelete = document.getElementById('voicechat-record-delete')
        const voiceChatRecordClose = document.getElementById('voicechat-record-close')
        voiceChatRecordDelete.click()
        voiceChatRecordClose.click()

        const url = URL.createObjectURL(blob)
        const chatbox = document.getElementById('chatbox') 
        const messageTempElement = Utils.createOutgoingMessageVoiceElement(url, Date.now(), this.timeAgo)
        
        if (this.userToChatId == userToChatId) {
            Utils.chatboxScrollToBottom(true)
            chatbox.appendChild(messageTempElement) 
        }

        await this.ffmpeg.writeFile('input.webm', new Uint8Array(await blob.arrayBuffer()))
        await this.ffmpeg.exec(['-i', 'input.webm', '-c:a', 'libopus', '-b:a', '0', 'output.webm']);
        const file = new File([await this.ffmpeg.readFile('output.webm')], 'audio.webm', { type: 'audio/webm' }) 
        const response = await this.service.createAudioMessage(this.uid, file, messageTempElement, Utils.progressSvgElementCallback) 

        if (response.status == 200) {   
            const type = MessageType.AUDIO
            const timestamp = Date.now()

            const data = JSON.stringify({
                sender: this.currentUser.id,
                receiver: userToChatId,
                type: type,
                content: response.data,
                timestamp: timestamp
            }) 

            const publickey = this.usersMap.get(userToChatId).userDetails.publickey.publickey
            const userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
            const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
            const encryptedReceiverTextMessage = await Utils.encryptMessage(userTochatPublickey, data) 
            const content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
            }))
            
            await this.setSendMessage(userToChatId, url, content, timestamp, messageTempElement, data) 
        }
    }

    setSendMessage = async (userToChatId, url, content, timestamp, oldMessageElement, data) => {
        const chatbox = document.getElementById('chatbox') 
        const messageElement = Utils.createOutgoingMessageVoiceElement(url, timestamp, this.timeAgo)
        messageElement.setAttribute('messageData', data)
        messageElement.setAttribute('lastMessageContent', 'You sent an audio 🔊')
        messageElement.setAttribute('currentUserId', this.currentUser.id)
        messageElement.copyTextMessageCallback = this.forwardMessageHandler.copyTextMessageCallback
        messageElement.forwardMessageCallback = this.forwardMessageHandler.forwardMessageCallback
        messageElement.deleteMessageCallback = this.service.deleteMessage

        if (this.userToChatId == userToChatId) { 
            Utils.chatboxScrollToBottom(true) 
            chatbox.replaceChild(messageElement, oldMessageElement)
        } 

        Utils.reOrderLastFourChatboxElements()
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin()  

        const response = await this.service.createTextMessage(this.uid, `messages/${this.currentUser.id}/${userToChatId}`, `${this.currentUser.id}-${userToChatId}`, this.currentUser.id, userToChatId, MessageType.AUDIO, content, timestamp, true)
        const doubleCheck = messageElement.querySelector('.double-check')
        if (response.ok) { 
            const messageData = await response.json()
            const id = messageData.id
            messageElement.setAttribute('uid', this.uid)
            messageElement.setAttribute('messageId', id)

            doubleCheck.classList.remove('text-gray-500', 'dark:text-neutral-500')
            doubleCheck.classList.add('text-green-500', 'dark:text-green-500')
            doubleCheck.querySelector('.text-node').textContent = "Sent"
         
            Utils.setUserLastMessageContent(userToChatId, 'You sent an audio 🔊') 
            Utils.setUserLastMessageTimestamp(userToChatId, timestamp)
            Utils.setUserLastMessageTimeAgo(userToChatId, timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(userToChatId)
        }
        else {
            doubleCheck.classList.remove('text-gray-500', 'dark:text-neutral-500')
            doubleCheck.classList.add('text-red-500', 'dark:text-red-500')
            doubleCheck.querySelector('.text-node').textContent = "Failed"
        }
    }
}
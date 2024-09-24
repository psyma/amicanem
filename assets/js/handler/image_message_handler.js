import Utils from '../utils/utils';
import Service from '../../service/service';
import MessageType from '../types/message_type';

import heic2any from 'heic2any';
import CryptoJS from 'crypto-js';
import TimeAgo from 'javascript-time-ago'; 

export default class ImageMessageHandler {
    constructor() {
        this.uid = null
        this.ffmpeg = null
        this.viewer = null
        this.currentUser = null
        this.userToChatId = null
        this.currentUserPublickey = null 
        this.forwardMessageHandler = null
        this.usersMap = new Map()
        this.timeAgo = new TimeAgo('en-US')
        this.service = new Service()

        this.imagesMap = new Map()
    }

    init = (uid, currentUser, userToChatId, currentUserPublickey, viewer, ffmpeg, usersMap, forwardMessageHandler) => {
        this.uid = uid
        this.currentUser = currentUser
        this.userToChatId = userToChatId
        this.currentUserPublickey = currentUserPublickey 
        this.forwardMessageHandler = forwardMessageHandler
        this.usersMap = usersMap
        this.viewer = viewer
        this.ffmpeg = ffmpeg 
        this.imagesMap = new Map()  
    }

    setButtonClick = () => {
        const chatboxMessageInput = document.getElementById('chatbox-message-input') 
        const chatboxVoiceInput = document.getElementById('chatbox-voice-input')
        const chatboxImageInput = document.getElementById('chatbox-image-input')
        const sendTextButton = document.getElementById('send-text-button') 
        const sendVoiceButton = document.getElementById('send-voice-button') 
        const sendImageButton = document.getElementById('send-image-button') 

        sendImageButton.onclick = () => {  
            if (!Utils.isTotalImagesToSendNotExceeded(this.imagesMap.size)) { return }
            if (!Utils.isImageFilesizeNotExceeded(Array.from(this.imagesMap))) { return }

            this.imagesMap.forEach(async (value, key) => { 
                const blob = value['file']
                const input = value['file'].name
                const width = Math.floor(value['width'] * .75)
                const height = Math.floor(value['height'] * .75)
                const mimeType = value['file'].type
                const extension = mimeType.split("/")[1] 
                const output = CryptoJS.MD5(Utils.generateRandomString(16)).toString() + "." + extension
                
                await this.sendMessage(this.userToChatId, blob, input, width, height, mimeType, extension, output)
            })

            Utils.unHideMediaGroup()
            this.imagesMap = new Map()
            chatboxImageInput.innerHTML = ''

            chatboxMessageInput.classList.remove('hidden')
            chatboxVoiceInput.classList.add('hidden')
            chatboxImageInput.classList.add('hidden')
            sendTextButton.classList.remove('hidden')
            sendVoiceButton.classList.add('hidden')
            sendImageButton.classList.add('hidden')
        }
    }

    setFileInputButtonClick = () => {
        const imageInputButton = document.getElementById('image-input-button')

        imageInputButton.onclick = () => { 
            const imageFileInput = document.getElementById('image-file-input')
            imageFileInput.click()
        }
    } 

    setFileInputOnChange = () => {
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
                    this.imagesMap.set(i, {
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
                            this.imagesMap.set(i, {
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
                        this.imagesMap.delete(i)
                        chatboxImageInput.removeChild(imageContainer); 

                        if (!this.imagesMap.size) {
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

    sendMessage = async (userToChatId, blob, input, width, height, mimeType, extension, output, isForward=false) => {
        let file = null 
        let url = URL.createObjectURL(blob)

        if (isForward) {
            file = new File([new Uint8Array(await blob.arrayBuffer())], output, { type: mimeType }) 
        } 
        else if (extension == 'png') {
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

        const chatbox = document.getElementById('chatbox') 
        const messageTempElement = Utils.createOutgoingMessageImageElement(url, Date.now(), this.timeAgo)  
        
        if (this.userToChatId == userToChatId) {
            Utils.chatboxScrollToBottom(true)
            chatbox.appendChild(messageTempElement) 
        }

        const response = await this.service.createImageMessage(this.uid, file, extension == 'heic' ? 'jpeg' : extension, messageTempElement, Utils.progressSvgElementCallback)
        if (response.status == 200) { 
            const type = MessageType.IMAGE
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
        const messageElement = Utils.createOutgoingMessageImageElement(url, timestamp, this.timeAgo)
        messageElement.setAttribute('messageData', data)
        messageElement.copyTextMessageCallback = this.forwardMessageHandler.copyTextMessageCallback
        messageElement.forwardMessageCallback = this.forwardMessageHandler.forwardMessageCallback
        messageElement.deleteMessageCallback = this.service.deleteMessage
        
        if (this.userToChatId == userToChatId) { 
            Utils.setViewerJsImageElement(messageElement, this.viewer)
            Utils.chatboxScrollToBottom(true) 
            chatbox.replaceChild(messageElement, oldMessageElement)
        } 

        Utils.reOrderLastFourChatboxElements()
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin() 

        const response = await this.service.createTextMessage(this.uid, `messages/${this.currentUser.id}/${userToChatId}`, `${this.currentUser.id}-${userToChatId}`, this.currentUser.id, userToChatId, MessageType.AUDIO, content, timestamp, true)
        const imgCheck = messageElement.querySelector('.img-check')
        if (response.ok) { 
            const messageData = await response.json()
            const id = messageData.id
            messageElement.setAttribute('uid', this.uid)
            messageElement.setAttribute('messageId', id)
         
            Utils.setUserLastMessageContent(userToChatId, 'You sent a photo') 
            Utils.setUserLastMessageTimestamp(userToChatId, timestamp)
            Utils.setUserLastMessageTimeAgo(userToChatId, timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(userToChatId)
            imgCheck.src = '/green_checks.svg'
        }
        else {
            imgCheck.src = '/red_checks.svg'
        }
    }
}
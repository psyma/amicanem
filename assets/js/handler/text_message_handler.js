import Utils from '../utils/utils';
import Service from '../../service/service';
import MessageType from '../types/message_type';

import TimeAgo from 'javascript-time-ago'; 

export default class TextMessageHandler {
    constructor() { 
        this.uid = null
        this.currentUser = null
        this.userToChatId = null
        this.currentUserPublickey = null
        this.forwardMessageHandler = null
        this.usersMap = new Map()
        this.timeAgo = new TimeAgo('en-US')

        this.service = new Service()
    }

    init = (uid, currentUser, userToChatId, currentUserPublickey, usersMap, forwardMessageHandler) => {
        this.uid = uid
        this.currentUser = currentUser
        this.userToChatId = userToChatId
        this.currentUserPublickey = currentUserPublickey
        this.forwardMessageHandler = forwardMessageHandler
        this.usersMap = usersMap 
    }

    setButtonClick = () => {
        const chatboxMessageInput = document.getElementById('chatbox-message-input')
        const sendTextButton = document.getElementById('send-text-button')

        sendTextButton.onclick = async () => {
            const message = chatboxMessageInput.innerText.trim()  
            if (!Utils.isEmptyOrSpaces(message)) { 
                await this.sendMessage(this.userToChatId, message) 
            }  
        }
    }

    setInputKeyDown = () => { 
        const chatboxMessageInput = document.getElementById('chatbox-message-input') 
        chatboxMessageInput.onkeydown = async (e) => {
            const message = e.target.innerText.trim()  
            if (Utils.getUserAgentPlatformType() == 'desktop') {
                if (e.key === 'Enter' && !e.shiftKey) {  
                    e.preventDefault()
                    
                    if (!Utils.isEmptyOrSpaces(message)) {
                        await this.sendMessage(this.userToChatId, message) 
                    } 
                }
            } 
        }  
    }

    sendMessage = async (userToChatId, message) => {
        if (message.length <= 1000) { 
            const chatboxMessageInput = document.getElementById('chatbox-message-input')
            
            chatboxMessageInput.textContent = ''
            const type = MessageType.TEXT
            const timestamp = Date.now()

            const data = JSON.stringify({
                sender: this.currentUser.id,
                receiver: userToChatId,
                type: type,
                content: message,
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

            await this.setSendMessage(userToChatId, message, content, timestamp, data) 
        }
    }

    setSendMessage = async (userToChatId, message, content, timestamp, data) => {
        const chatbox = document.getElementById('chatbox') 
        const messageElement = Utils.createOutgoingMessageTextElement(message, timestamp, this.timeAgo)
        messageElement.setAttribute('messageData', data) 
        messageElement.setAttribute('lastMessageContent', message) 
        messageElement.setAttribute('currentUserId', this.currentUser.id)
        messageElement.copyTextMessageCallback = this.forwardMessageHandler.copyTextMessageCallback
        messageElement.forwardMessageCallback = this.forwardMessageHandler.forwardMessageCallback
        messageElement.deleteMessageCallback = this.service.deleteMessage

        if (this.userToChatId == userToChatId) { 
            Utils.chatboxScrollToBottom(true) 
            chatbox.appendChild(messageElement) 
        } 

        Utils.reOrderLastFourChatboxElements()
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin()  

        const response = await this.service.createTextMessage(this.uid, `messages/${this.currentUser.id}/${userToChatId}`, `${this.currentUser.id}-${userToChatId}`, this.currentUser.id, userToChatId, MessageType.TEXT, content, timestamp, true)
        const doubleCheck = messageElement.querySelector('.double-check')
        if (response.ok) { 
            const messageData = await response.json()
            const id = messageData.id
            messageElement.setAttribute('uid', this.uid)
            messageElement.setAttribute('messageId', id)
            
            doubleCheck.classList.remove('text-gray-500', 'dark:text-neutral-500')
            doubleCheck.classList.add('text-green-500', 'dark:text-green-500')
            doubleCheck.querySelector('.text-node').textContent = "Sent"
            
            Utils.setUserLastMessageContent(userToChatId, message) 
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
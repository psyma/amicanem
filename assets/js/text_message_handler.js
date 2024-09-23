import Utils from '../js/utils';
import Service from '../service/service';
import MessageType from './message_type';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

export default class TextMessageHandler {
    constructor() {
        //TimeAgo.addDefaultLocale(en)

        this.uid = null
        this.currentUser = null
        this.userToChatId = null
        this.currentUserPublickey = null
        this.usersMap = new Map()
        this.timeAgo = new TimeAgo('en-US')

        this.service = new Service()
    }

    init = (uid, currentUser, userToChatId, currentUserPublickey, usersMap) => {
        this.uid = uid
        this.currentUser = currentUser
        this.userToChatId = userToChatId
        this.currentUserPublickey = currentUserPublickey
        this.usersMap = usersMap
    }

    setButtonClick = () => {
        const chatboxMessageInput = document.getElementById('chatbox-message-input')
        const sendTextButton = document.getElementById('send-text-button')

        sendTextButton.onclick = async () => {
            const message = chatboxMessageInput.innerText.trim()  
            if (!Utils.isEmptyOrSpaces(message)) { 
                await this.#sendMessage(this.userToChatId, message)
                //await this.sendTextMessage(this.userToChatId, message)
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
                        await this.#sendMessage(this.userToChatId, message)
                        //await this.sendTextMessage(this.userToChatId, message)
                    } 
                }
            }
        }
    }

    #sendMessage = async (userToChatId, message) => {
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

        await this.#setSendMessage(userToChatId, message, content, timestamp)
        //const messageElement = Utils.createOutgoingMessageTextElement(message, timestamp, this.timeAgo)
        //messageElement.setAttribute('messageData', data)
        //messageElement.copyTextMessageCallback = this.copyTextMessageCallback
        //messageElement.forwardMessageCallback = this.forwardMessageCallback
        //await this.setSentMessage(receiver, content, messageElement, message, type, timestamp)
    }

    #setSendMessage = async (userToChatId, message, content, timestamp) => {
        const chatbox = document.getElementById('chatbox') 
        const messageElement = Utils.createOutgoingMessageTextElement(message, timestamp, this.timeAgo)
        
        Utils.chatboxScrollToBottom(true) 
        chatbox.appendChild(messageElement) 

        Utils.reOrderLastFourChatboxElements()
        Utils.setChatboxMessageAvatarHidden()
        Utils.setChatboxDividerTimestamp()
        Utils.setChatboxMessageBorderAndMargin()  

        const response = await this.service.createTextMessage(this.uid, `messages/${this.currentUser.id}/${userToChatId}`, `${this.currentUser.id}-${userToChatId}`, this.currentUser.id, userToChatId, MessageType.TEXT, content, timestamp, true)
        const imgCheck = messageElement.querySelector('.img-check')
        if (response.ok) { 
            const messageData = await response.json()
            const id = messageData.id
            messageElement.setAttribute('messageId', id)
            imgCheck.src = '/green_checks.svg'
            
            Utils.setUserLastMessageContent(userToChatId, message) 
            Utils.setUserLastMessageTimestamp(userToChatId, timestamp)
            Utils.setUserLastMessageTimeAgo(userToChatId, timestamp, this.timeAgo)
            Utils.reOrderUsersListIfNewMessageIsBeingSentOrReceived(userToChatId)
        }
        else {
            imgCheck.src = '/red_checks.svg'
        }
    }
}
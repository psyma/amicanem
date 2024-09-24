import Utils from "../utils/utils"
import MessageType from "../types/message_type"

export default class ForwardMessageHandler {
    constructor() {
        this.type = null
        this.content = null
        this.blob = null
        this.mimeType = null
        this.output = null 
        this.usersMap = null

        this.textMessageHandler = null
        this.voiceMessageHandler = null
        this.imageMessageHandler = null
    }

    init = (textMessageHandler, voiceMessageHandler, imageMessageHandler, usersMap) => {
        this.textMessageHandler = textMessageHandler
        this.voiceMessageHandler = voiceMessageHandler
        this.imageMessageHandler = imageMessageHandler
        this.usersMap = usersMap
    }

    copyTextMessageCallback = async (content) => {
        await navigator.clipboard.writeText(content)
    }

    forwardMessageCallback = (type, content, blob, mimeType, output) => {
        this.type = type
        this.content = content
        this.blob = blob
        this.mimeType = mimeType
        this.output = output 
 
        Utils.setForwardUserUiDefaults(this.usersMap)
    }

    setForwardMessage = (user) => { 
        const forwardUserSvgSent = document.getElementById(`forward-user-svg-sent-${user.id}`)
        const forwardUserSvgDefault = document.getElementById(`forward-user-svg-default-${user.id}`)
        const forwardUserSpanText = document.getElementById(`forward-user-span-text-${user.id}`)
        const forwadUserButton = document.getElementById(`forward-user-button-${user.id}`)

        forwadUserButton.onclick = async () => {    
            forwadUserButton.setAttribute('disabled', '')
            forwadUserButton.classList.add("cursor-not-allowed")
            forwadUserButton.classList.remove('bg-indigo-600', 'dark:bg-indigo-300')
            forwadUserButton.classList.add('bg-gray-600', 'dark:bg-gray-300')
            forwardUserSvgSent.classList.remove('hidden')
            forwardUserSvgDefault.classList.add('hidden')
            forwardUserSpanText.textContent = 'Sent'
 
            if (this.type == MessageType.TEXT) {
                await this.textMessageHandler.sendMessage(user.id, this.content)
            }
            else if (this.type == MessageType.AUDIO) {
                await this.voiceMessageHandler.sendMessage(user.id, this.blob)
            }
            else if (this.type == MessageType.IMAGE) {
                await this.imageMessageHandler.sendMessage(user.id, this.blob, null, null, null, this.mimeType, null, this.output, true)
            } 
        }
    }
}
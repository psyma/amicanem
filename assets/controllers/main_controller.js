import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   

import CryptoJS from 'crypto-js';

import Pusher from 'pusher-js' 

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

        await this.setEncryptionDetails() 
        //const response = await fetch("/message", { method: "POST"  })
        //console.log(response.ok)  

        const response = await this.service.getUsers(this.uidValue)
        const users = await response.json()

        users.forEach((user) => {
            const userElement = document.getElementById(`user${user.id}`) // sidebar user list element
            if (userElement != null) {
                userElement.onclick = () => {
                    const publickey = userElement.getAttribute('publickey')
                    this.userTochatPublickey = Utils.base64ToArrayBuffer(publickey)
                    this.userToChatId = user.id
                }
            }

            const channel = this.pusher.subscribe('message')
            channel.bind(`user${user.id}`, (data) => {
                console.log(data)
            })
        })

        const sendMessageButton = document.getElementById("sendMessageButton")
        sendMessageButton.onclick = async () => {
            const data = JSON.stringify({
                sender: this.currentUserValue.id,
                receiver: this.userToChatId,
                type: MessageType.TEXT,
                content: "Hello World!",
                timestamp: Date.now()
            })

            const encryptedSenderTextMessage = await Utils.encryptMessage(this.currentUserPublickey, data)
            const encryptedReceiverTextMessage = await Utils.encryptMessage(this.userTochatPublickey, data)
            const content = [encryptedSenderTextMessage, encryptedReceiverTextMessage].join("<|>") 
            await this.service.createTextMessage(this.uidValue, `user${this.userToChatId}`, this.currentUserValue.id, this.userToChatId, MessageType.TEXT, content, Date.now(), true)
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

    setPusherChannelSubscription = () => {

    }
}

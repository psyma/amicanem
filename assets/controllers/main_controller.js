import { Controller } from '@hotwired/stimulus';
 
import Utils from '../js/utils';
import Service from "../service/service"   

import CryptoJS from 'crypto-js';

import Pusher from 'pusher-js' 

export default class extends Controller {
    static values = {
        currentUser: Object,
        uid: String,
        publickey: String,
        privateKey: String,
        passphrase: String
    }
    static service = null
    static pusher = null

    connect = async () => {
        this.service = new Service()

        Pusher.logToConsole = false;
        this.pusher = new Pusher('7c4d952c51d2be9a8302', {
            cluster: 'ap1'
        });

        var channel = this.pusher.subscribe('message');
        channel.bind('new-greeting', function(data) {
            
        });

        const response = await fetch("/message", { method: "POST"  })
        //console.log(response.ok)  
         
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
    }
}

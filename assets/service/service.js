import axios from 'axios'

export default class Service { 
    setEncryptionDetails = async (uid, publickey, privatekey, passphrase) => {
        const data = new FormData()
        data.append("uid", uid)
        data.append("publickey", publickey)
        data.append("privatekey", privatekey)
        data.append("passphrase", passphrase)

        try {
            const response = await fetch("/set_encryption_details", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        } 
    }

    createTextMessage = async (uid, event, channels, sender, receiver, type, content, timestamp, isSaveMessage=true) => {
        const data = new FormData()
        data.append("uid", uid)
        data.append("event", event)
        data.append("channels", channels)
        data.append("sender", sender)
        data.append("receiver", receiver)
        data.append("type", type)
        data.append("content", content)
        data.append("timestamp", timestamp)
        data.append("isSaveMessage", isSaveMessage)

        try {
            const response = await fetch("/create_text_message", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        } 
    }

    createAudioMessage = async (uid, file, messageTempElement, progressCallback) => {
        const data = new FormData()
        data.append('uid', uid) 
        data.append('file', file)

        try {  
            const response = await axios.post('/create_audio_message', data, {
                onUploadProgress: function (progressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total) 
                    progressCallback(messageTempElement, percentCompleted) 
                }
            })  
            progressCallback(messageTempElement, 100) 
            return response
        } catch(e) {  
            return { status: 500 }
        }
    } 

    createImageMessage = async (uid, file, extension, messageTempElement, progressCallback) => {
        const data = new FormData()
        data.append('uid', uid) 
        data.append('file', file)
        data.append('extension', extension)

        try {   
            const response = await axios.post('/create_image_message', data, {
                onUploadProgress: function (progressEvent) {  
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total) 
                    progressCallback(messageTempElement, percentCompleted) 
                }
            })  
            progressCallback(messageTempElement, 100) 
            return response
        } catch(e) {  
            return { status: 500 }
        }
    }

    deleteMessage = async (uid, id) => { 
        try { 
            const response = await fetch(`/delete_message/${uid}/${id}`, { method: "DELETE" })
            return await response
        } catch(e) {
            return { ok: false }
        } 
    }

    sendTypingNotification = async (uid, event, channels, isTyping) => {
        const data = new FormData()
        data.append('uid', uid) 
        data.append("event", event)
        data.append("channels", channels)
        data.append('isTyping', isTyping)

        try {
            const response = await fetch("/send_typing_notification", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        } 
    }

    getUserLastSeen = async (uid, id) => {
        try {
            const response = await fetch(`/get_user_last_seen/${uid}/${id}`, { method: "GET" }) 
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    createMessage = async (uid, sender, receiver, type, content, timestamp, saveMessages) => {
        const data = new FormData()
        data.append("uid", uid)
        data.append("sender", sender)
        data.append("receiver", receiver)
        data.append("type", type)
        data.append("content", content)
        data.append("timestamp", timestamp) 
        data.append("saveMessages", saveMessages)  
 
        try {
            const response = await fetch("/message", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        } 
    } 

    createImage = async (uid, sender, file, progressCircle) => {
        const data = new FormData()
        data.append('uid', uid)
        data.append('sender', sender)
        data.append('file', file)

        try {  
            const response = await axios.post('/image', data, {
                onUploadProgress: function (progressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);  
                    progressCircle.setAttribute("stroke-dashoffset", `calc(251.2px - (251.2px * ${percentCompleted - 1}) / 100)`);
                }
            })  
            return response
        } catch(e) {   
            return { status: 500 }
        }
    }

    createAudio = async (uid, sender, file, progressCircle) => {
        const data = new FormData()
        data.append('uid', uid)
        data.append('sender', sender)
        data.append('file', file)

        try {  
            const response = await axios.post('/audio', data, {
                onUploadProgress: function (progressEvent) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);  
                    progressCircle.setAttribute("stroke-dashoffset", `calc(251.2px - (251.2px * ${percentCompleted - 1}) / 100)`);
                }
            })  
            return response
        } catch(e) {  
            return { status: 500 }
        }
    } 

    setSeenMessage = async (uid, sender, id) => {
        const data = new FormData()
        data.append('uid', uid)
        data.append('sender', sender)
        data.append('id', id)

        try {
            const response = await fetch("/set_seen_message", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    setPairKey = async (uid, sender, publicKey, privateKey) => {
        const data = new FormData()
        data.append('uid', uid)
        data.append('sender', sender)
        data.append('publicKey', publicKey)
        data.append('privateKey', privateKey)

        try {
            const response = await fetch("/set_pairkey", { method: "POST", body: data })
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    getPrivateKey = async (uid, sender) => {
        try {
            const response = await fetch(`/get_private_key/${uid}/${sender}`, { method: "GET" }) 
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    getMessages = async (uid, sender, receiver, page, pageSize, toReverse = 0) => {
        try {
            const response = await fetch(`/get_messages/${uid}/${sender}/${receiver}/${page}/${pageSize}/${toReverse}`, { method: "GET" }) 
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    getLastMessages = async (uid, id) => {
        try {
            const response = await fetch(`/get_last_messages/${uid}/${id}`, { method: "GET" })  
            return await response
        } catch(e) {
            return { ok: false }
        }
    } 

    getUsers = async (uid) => {
        try {     
            const response = await fetch(`/get_users/${uid}`, { method: "GET" }) 
            return await response
        } catch(e) {
            return { ok: false }
        }
    }

    getFirebaseConfig = async (uid) => {
        try {
            const response = await fetch(`/get_firebase_config/${uid}`, { method: "GET" }) 
            return await response
        } catch(e) {
            return { ok: false }
        }
    } 
}
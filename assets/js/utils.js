export default class Utils {
    static encryptMessage = async (publicKey, message, chunkSize=190) => {
        const importedPublicKey = await window.crypto.subtle.importKey(
            "spki",
            publicKey,
            {
                name: "RSA-OAEP",
                hash: "SHA-256",
            },
            false,
            ["encrypt"]
        );
    
        const encoder = new TextEncoder();
        const encodedMessage = encoder.encode(message);
     
        const chunks = [];
        for (let i = 0; i < encodedMessage.length; i += chunkSize) {
            chunks.push(encodedMessage.slice(i, i + chunkSize));
        }
     
        const encryptedChunks = await Promise.all(chunks.map(chunk =>
            window.crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                importedPublicKey,
                chunk
            )
        ));
     
        const totalLength = encryptedChunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
        const concatenatedEncryptedMessage = new Uint8Array(totalLength);

        let offset = 0;
        encryptedChunks.forEach(chunk => {
            concatenatedEncryptedMessage.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
        });
     
        return this.arrayBufferToBase64(concatenatedEncryptedMessage.buffer); 
    }

    static decryptMessage = async (privateKey, base64Message, chunkSize=256) => {  
        const encryptedMessage = this.base64ToArrayBuffer(base64Message);

        const importedPrivateKey = await window.crypto.subtle.importKey(
            "pkcs8",
            privateKey,
            {
                name: "RSA-OAEP",
                hash: "SHA-256",
            },
            false,
            ["decrypt"]
        );
 
        const encryptedChunks = [];
        for (let i = 0; i < encryptedMessage.byteLength; i += chunkSize) {
            encryptedChunks.push(encryptedMessage.slice(i, i + chunkSize));
        }
 
        const decryptedChunks = await Promise.all(encryptedChunks.map(chunk =>
            window.crypto.subtle.decrypt(
                {
                    name: "RSA-OAEP"
                },
                importedPrivateKey,
                chunk
            )
        ));
 
        const totalLength = decryptedChunks.reduce((acc, chunk) => acc + chunk.byteLength, 0);
        const concatenatedDecryptedMessage = new Uint8Array(totalLength);

        let offset = 0;
        decryptedChunks.forEach(chunk => {
            concatenatedDecryptedMessage.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
        });
 
        const decoder = new TextDecoder();
        return decoder.decode(concatenatedDecryptedMessage); 
    }

    static generateEncryptionKeyPair = async () => {
        const keyPair = await window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP",
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt"]
        );
     
        const publicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
        const privateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
    
        return { publicKey, privateKey };
    }

    static arrayBufferToBase64 = (buffer) => {
        const uint8Array = new Uint8Array(buffer);
        let binary = '';
        const len = uint8Array.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(uint8Array[i]);
        }

        return btoa(binary);
    }
    
    static base64ToArrayBuffer = (base64) => {
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }  
}
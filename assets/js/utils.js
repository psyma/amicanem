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

    static setChatboxMessageAvatarHidden = () => {
        // if the user has successive messages then only show 1 avatar
        const chatbox = document.getElementById('chatbox')
        const elements = Array.from(chatbox.children)
        for (let i = 0; i < elements.length - 1; i++) {
            const current = elements[i]
            const next = elements[i + 1]

            const avatar1 = current.querySelector('.avatar')
            const avatar2 = next.querySelector('.avatar')
            if (avatar1 != null &&  avatar2 != null) {
                avatar1.classList.add('invisible') 
            }
        } 
    }

    static setChatboxMessageBorderAndMargin = () => {
        // if the user has successive messages then the last element border and margin must be updated
        const chatbox = document.getElementById('chatbox')
        const elements = Array.from(chatbox.children)
        for (let i = 0; i < elements.length - 1; i++) {
            const current = elements[i]
            const next = elements[i + 1]

            const avatar1 = current.querySelector('.avatar')
            const avatar2 = next.querySelector('.avatar')
            if (avatar1 != null && avatar2 != null) { 
                current.classList.remove('mb-10')
                current.querySelector('.chat-message-container').classList.remove('rounded-bl-none')
                
                if (i != elements.length - 2) {
                    next.classList.add('mb-10')
                }
            }
            else if (avatar1 == null && avatar2 == null) {
                try { 
                    current.classList.remove('mb-10')
                    current.querySelector('.chat-message-container').classList.remove('rounded-br-none')
                    
                    if (i != elements.length - 2) {
                        next.classList.add('mb-10')
                    }
                } catch(e) { }
            } 
        } 
    }
    
    static createLoaderElement = () => {
        const colorTheme = localStorage.getItem('color-theme') 
        const loader = document.createElement("div")
        loader.className = colorTheme === "dark" ? "loader-white absolute" : "loader-black absolute" 
        loader.style.left = "calc(50% - 25px)"
        loader.style.top = "50%"

        return loader
    }

    static createOutgoingMessageTextElement = (message) => {  
        const mainDiv = document.createElement('div')
 
        const selectNoneDiv = document.createElement('div')
        selectNoneDiv.classList.add('select-none')
 
        const flexDiv = document.createElement('div')
        flexDiv.classList.add( 'flex', 'justify-end')
 
        const mr4Div = document.createElement('div')
        mr4Div.classList.add('mr-4');
 
        const flexItemsDiv = document.createElement('div')
        flexItemsDiv.classList.add('flex', 'items-end')
 
        const chatMessageContainer = document.createElement('div')
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-5', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'ml-4', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600')
 
        const chatMessage = document.createElement('p')
        chatMessage.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatMessage.setAttribute('tabindex', '0')
        chatMessage.textContent = message
 
        chatMessageContainer.appendChild(chatMessage);
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-4', 'order-1')
 
        const timeP = document.createElement('p')
        timeP.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeP.innerText = '2 mins ago'
 
        timeDiv.appendChild(timeP)
 
        const img = document.createElement('img')
        img.src = '/gray_checks.svg'
        img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check')
 
        flexItemsDiv.appendChild(chatMessageContainer)
        flexItemsDiv.appendChild(timeDiv)
        flexItemsDiv.appendChild(img)
 
        flexDiv.appendChild(mr4Div)
        flexDiv.appendChild(flexItemsDiv)

        selectNoneDiv.appendChild(flexDiv)
 
        mainDiv.appendChild(selectNoneDiv)

        return mainDiv 
    }

    static createIncomingMessageTextElement = (message, avatar) => {  
        const mainDiv = document.createElement('div')
 
        const innerDiv1 = document.createElement('div')
        innerDiv1.classList.add('select-none')
 
        const flexDiv = document.createElement('div')
        flexDiv.classList.add( 'flex')
 
        const avatarDivContainer = document.createElement('div')
        avatarDivContainer.classList.add('mr-4', 'flex', 'items-end')
 
        const avatarDiv = document.createElement('div')
        avatarDiv.classList.add('outline-none')
 
        const avatarImageDiv = document.createElement('div')
        avatarImageDiv.classList.add('avatar', 'w-[2.25rem]', 'h-[2.25rem]', 'bg-cover', 'bg-center', 'rounded-full')
        avatarImageDiv.style.backgroundImage = `url("${avatar}")`
 
        avatarDiv.appendChild(avatarImageDiv)
 
        avatarDivContainer.appendChild(avatarDiv)
 
        const chatContainer = document.createElement('div')
        chatContainer.classList.add('flex', 'items-end')
 
        const chatMessageContainer = document.createElement('div')
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-5', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600')
 
        const chatMessage = document.createElement('p')
        chatMessage.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatMessage.setAttribute('tabindex', '0')
        chatMessage.textContent = message
 
        chatMessageContainer.appendChild(chatMessage)
 
        const timeContainer = document.createElement('div')
        timeContainer.classList.add('mr-4')
 
        const timeText = document.createElement('p')
        timeText.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = '1:00 pm'
 
        timeContainer.appendChild(timeText)
 
        chatContainer.appendChild(chatMessageContainer)
        chatContainer.appendChild(timeContainer)
 
        flexDiv.appendChild(avatarDivContainer)
        flexDiv.appendChild(chatContainer)
 
        innerDiv1.appendChild(flexDiv)
 
        mainDiv.appendChild(innerDiv1)

        return mainDiv 
    }
}
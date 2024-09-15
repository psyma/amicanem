import Bowser from 'bowser';
import WaveSurfer from 'wavesurfer.js'

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
    
    static sortUsersListBaseOnLastMessageTimestamp = () => {
        const usersList = document.getElementById('users-list')
        const usersElements = Array.from(usersList.children)  
        usersElements.sort((a, b) => {
            const timestampA = parseInt(a.querySelector('.last-message').getAttribute('timestamp'))
            const timestampB = parseInt(b.querySelector('.last-message').getAttribute('timestamp')) 
            return timestampB - timestampA
        }).forEach((element) => { 
            usersList.removeChild(element)
            usersList.appendChild(element)
        }) 
    }

    static reOrderUsersListIfNewMessageIsBeingSentOrReceived = (id) => { 
        const usersList = document.getElementById('users-list')
        const element = document.getElementById(`user${id}`)
        usersList.removeChild(element)
        usersList.prepend(element)
    }

    static isTimestampIsGreaterThanNminutes = (timestamp, N) => {
        const t = parseInt(timestamp)
        const milliseconds = N * 60 * 1000
        const currentTime = Date.now()

        return t >= (currentTime - milliseconds)
    }

    static getUserAgentPlatformType = () => {
        const browser = Bowser.getParser(window.navigator.userAgent); 
        return browser.parsedResult.platform.type  
    }

    static hideMediaGroup = () => {
        const group = document.getElementById('media-group')
        if (this.getUserAgentPlatformType() == 'mobile') {
            group.classList.add('hidden') 
        }
    }

    static unHideMediaGroup = () => {
        const group = document.getElementById('media-group')
        group.classList.remove('hidden') 
    }

    static setUserLastMessageContent = (id, content) => {
        const userLastMessage = document.getElementById(`user${id}-last-message`)
        userLastMessage.textContent = content
    }

    static setUserLastMessageTimestamp = (id, timestamp) => {
        const userLastMessage = document.getElementById(`user${id}-last-message`)
        userLastMessage.setAttribute('timestamp', timestamp) 
    }

    static setUserLastMessageTimeAgo = (id, timestamp, timeAgo) => {
        const userLastMessageTimeAgo = document.getElementById(`user${id}-time-ago`) 
        userLastMessageTimeAgo.textContent = "·" + timeAgo.format(timestamp, 'mini-now')
        if (this.isTimestampIsGreaterThanNminutes(timestamp, 60)) {
            var intervalId = setInterval(() => { 
                const userLastMessage = document.getElementById(`user${id}-last-message`)
                const prevTimestamp = userLastMessage.getAttribute('timestamp')
                if (prevTimestamp != timestamp) {
                    clearInterval(intervalId)
                }
                else {
                    userLastMessageTimeAgo.textContent = "·" + timeAgo.format(timestamp, 'mini-now')
                }
 
            }, 30 * 1000)
        } 
    }

    static setMessageTextElementTimeAgo = (element, timestamp, timeAgo) => {
        element.textContent = timeAgo.format(timestamp, 'round')
        if (this.isTimestampIsGreaterThanNminutes(timestamp, 60)) {
            setInterval(() => {
                element.textContent = timeAgo.format(timestamp, 'round') 
            }, 30 * 1000)
        }
    }

    static setIntroductionElement = (name, avatar) => {
        const chatbox = document.getElementById('chatbox') 
        const container = document.createElement('div')

        const flexContainer = document.createElement('div')
        flexContainer.className = 'flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0'

        const profileImage = document.createElement('div')
        profileImage.className = 'w-16 h-16 rounded-full bg-contain bg-center shadow border border-gray-200 dark:border-gray-700 mb-2'
        profileImage.style.backgroundImage = `url('${avatar}')`

        const nameParagraph = document.createElement('p')
        nameParagraph.className = 'outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem] default-outline'
        nameParagraph.tabIndex = 0
        nameParagraph.textContent = name

        const encryptedContainer = document.createElement('div')
        encryptedContainer.className = 'bg-indigo-50 dark:bg-slate-600 rounded p-3 mt-8 mx-5 sm:mx-0'

        const flexInnerContainer = document.createElement('div')
        flexInnerContainer.className = 'flex justify-center items-center gap-1'

        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svgIcon.setAttribute('viewBox', '0 0 24 24')
        svgIcon.setAttribute('fill', 'currentColor')
        svgIcon.setAttribute('aria-hidden', 'true')
        svgIcon.setAttribute('class','w-5 h-6 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200 text-gray-300')
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('fill-rule', 'evenodd')
        path.setAttribute('d', 'M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z')
        path.setAttribute('clip-rule', 'evenodd')
        svgIcon.appendChild(path)

        const encryptedText = document.createElement('span')
        encryptedText.className = 'flex align-middle outline-none text-xs text-black opacity-60 dark:text-white dark:opacity-70 font-bold leading-4 tracking-[.01rem] default-outline'
        encryptedText.tabIndex = 0
        encryptedText.textContent = 'End-to-end encrypted'

        flexInnerContainer.appendChild(svgIcon)
        flexInnerContainer.appendChild(encryptedText)

        const messageText = document.createElement('div')
        messageText.className = 'text-center mx-auto outline-none text-xs text-black opacity-60 dark:text-white dark:opacity-70 leading-4 tracking-[.01rem] default-outline'
        messageText.tabIndex = 0
        messageText.innerHTML = 'Messages and calls are secured with end-to-end encryption. <span class="text-blue-500">Learn more</span>'

        encryptedContainer.appendChild(flexInnerContainer)
        encryptedContainer.appendChild(messageText)

        flexContainer.appendChild(profileImage)
        flexContainer.appendChild(nameParagraph)
        flexContainer.appendChild(encryptedContainer)

        container.appendChild(flexContainer)

        chatbox.appendChild(container) 
    }

    static createLoaderElement = () => {
        const colorTheme = localStorage.getItem('color-theme') 
        const loader = document.createElement("div")
        loader.className = colorTheme === "dark" ? "loader-white absolute" : "loader-black absolute" 
        loader.style.left = "calc(50% - 25px)"
        loader.style.top = "50%"

        return loader
    }

    static createVoiceMessageElement = (url) => {
        const recordInput = document.createElement('div')
        recordInput.classList.add("group", "w-full", "self-center", "rounded", "transition", "duration-500", "bg-indigo-50", "dark:bg-gray-600")

        const flexContainer = document.createElement('div')
        flexContainer.classList.add("flex", "items-center", "outline-none", "gap-2")
        flexContainer.setAttribute("tabindex", "0")
        flexContainer.setAttribute("aria-label", "audio message")

        const startBtn = document.createElement('button')
        startBtn.classList.add("px-2.5", "py-2", "flex", "justify-center", "items-center", "rounded-[.75rem]", "outline-none", "transition-all", "duration-200", "bg-indigo-300", "active:bg-indigo-400")
        startBtn.setAttribute("title", "Play")
        startBtn.setAttribute("aria-label", "Play")
        startBtn.type = "button"

        const playSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        playSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        playSvg.setAttribute('fill', 'none')
        playSvg.setAttribute('viewBox', '0 0 24 24')
        playSvg.setAttribute('stroke-width', '1.5')
        playSvg.setAttribute('stroke', 'currentColor')
        playSvg.setAttribute('aria-hidden', 'true')
        playSvg.classList.add("w-3.5", "h-3.5", "text-white")
        const playPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        playPath.setAttribute('stroke-linecap', 'round')
        playPath.setAttribute('stroke-linejoin', 'round')
        playPath.setAttribute('d', 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z')
        playSvg.appendChild(playPath)

        const stopSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        stopSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        stopSvg.setAttribute('fill', 'none')
        stopSvg.setAttribute('viewBox', '0 0 24 24')
        stopSvg.setAttribute('stroke-width', '1.5')
        stopSvg.setAttribute('stroke', 'currentColor')
        stopSvg.setAttribute('aria-hidden', 'true')
        stopSvg.classList.add("hidden", "w-3.5", "h-3.5", "text-white")
        const stopRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        stopRect.setAttribute('width', '12')
        stopRect.setAttribute('height', '12')
        stopRect.setAttribute('x', '6')
        stopRect.setAttribute('y', '6')
        stopRect.setAttribute('stroke', 'currentColor')
        stopRect.setAttribute('stroke-linejoin', 'round')
        stopRect.setAttribute('stroke-width', '2')
        stopRect.setAttribute('rx', '1')
        stopSvg.appendChild(stopRect)

        startBtn.appendChild(playSvg)
        startBtn.appendChild(stopSvg)

        const waveformDiv = document.createElement('div')
        waveformDiv.classList.add("sm:w-[9.375rem]", "w-[6.375rem]")
        const wavesurfer = WaveSurfer.create({
            container: waveformDiv,
            waveColor: 'rgb(200, 0, 200)', 
            hideScrollbar: true,   
            autoCenter: true,
            height: 30,
            barHeight: 25, 
            barWidth: 1.5,
            cursorWidth: 0, 
            url: url
        }) 

        const timer = document.createElement('p')
        timer.classList.add("outline-none", "text-xs", "font-light", "leading-4", "tracking-[.01rem]", "text-black", "dark:text-white", "opacity-40", "dark:opacity-70")
        timer.setAttribute("tabindex", "0")
        timer.setAttribute("aria-label", "00:00")
        startBtn.onclick = () => wavesurfer.playPause()  
       
        wavesurfer.on('ready', (duration) => {
            const remainingTime = wavesurfer.getDuration() 
            const minutes = Math.floor(remainingTime / 60)
            const seconds = Math.floor(remainingTime % 60)
            const formattedTime = `0${minutes}:${seconds.toString().padStart(2, '0')}`
            timer.textContent = formattedTime
        })

        wavesurfer.on('pause', () => { 
            playSvg.classList.remove('hidden')
            stopSvg.classList.add('hidden')
        })
        wavesurfer.on('play', () => {
            playSvg.classList.add('hidden')
            stopSvg.classList.remove('hidden')
        }) 
        wavesurfer.on('timeupdate', (currentTime) => { 
            const remainingTime = Math.abs(wavesurfer.getDuration() - currentTime)
            const minutes = Math.floor(remainingTime / 60)
            const seconds = Math.floor(remainingTime % 60)
            const formattedTime = `0${minutes}:${seconds.toString().padStart(2, '0')}`
            timer.textContent = formattedTime
        })

        flexContainer.appendChild(startBtn)
        flexContainer.appendChild(waveformDiv)
        flexContainer.appendChild(timer)
 
        recordInput.appendChild(flexContainer);

        return recordInput
    }

    static createOutgoingMessageTextElement = (content, timestamp, timeAgo) => {  
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
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-5', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'ml-4', 'order-2', 'bg-indigo-50', 'dark:bg-slate-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatContent.setAttribute('tabindex', '0')
        chatContent.textContent = content
 
        chatMessageContainer.appendChild(chatContent);
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-1.5', 'order-1')
 
        const timeText = document.createElement('p')
        timeText.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
 
        timeDiv.appendChild(timeText)
 
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

    static createOutgoingMessageVoiceElement = (url, timestamp, timeAgo) => {
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
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-5', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'ml-4', 'order-2', 'bg-indigo-50', 'dark:bg-slate-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatContent.setAttribute('tabindex', '0') 

        const voiceElement = this.createVoiceMessageElement(url) 
        chatMessageContainer.appendChild(voiceElement)
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-1.5', 'order-1')
 
        const timeText = document.createElement('p')
        timeText.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
 
        timeDiv.appendChild(timeText)
 
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

    static createIncomingMessageTextElement = (content, avatar, timestamp, timeAgo) => {  
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
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatContent.setAttribute('tabindex', '0')
        chatContent.textContent = content
 
        chatMessageContainer.appendChild(chatContent)
 
        const timeContainer = document.createElement('div')
        timeContainer.classList.add('mr-4')
 
        const timeText = document.createElement('p')
        timeText.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
 
        timeContainer.appendChild(timeText)
 
        chatContainer.appendChild(chatMessageContainer)
        chatContainer.appendChild(timeContainer)
 
        flexDiv.appendChild(avatarDivContainer)
        flexDiv.appendChild(chatContainer)
 
        innerDiv1.appendChild(flexDiv)
 
        mainDiv.appendChild(innerDiv1)

        return mainDiv 
    }

    static createIncomingMessageVoiceElement = (url, avatar, timestamp, timeAgo) => {
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
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70')
        chatContent.setAttribute('tabindex', '0')

        const voiceElement = this.createVoiceMessageElement(url) 
        chatMessageContainer.appendChild(voiceElement)
 
        const timeContainer = document.createElement('div')
        timeContainer.classList.add('mr-4')
 
        const timeText = document.createElement('p')
        timeText.classList.add('outline-none', 'text-xs', 'text-black', 'opacity-60', 'dark:text-white', 'dark:opacity-70', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
 
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
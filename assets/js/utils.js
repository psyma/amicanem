import Bowser from 'bowser';
import WaveSurfer from 'wavesurfer.js'
import { Dropdown } from 'flowbite';

class MessageType {
    static TEXT = 0
    static IMAGE = 1
    static GIF = 2
    static AUDIO = 3
    
    static get TEXT() { return TEXT }
    static get IMAGE() { return IMAGE }
    static get GIF() { return GIF }
} 

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

    static generateRandomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
    
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
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

    static formatTimestampIntoDaysOfWeek = (timestamp) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
        // Convert epoch to milliseconds and create a Date object
        const date = new Date(parseInt(timestamp))
        
        // Get today's date
        const today = new Date()
        
        // Strip time from today's date and just keep year, month, day
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
        
        // Strip time from yesterday
        const startOfYesterday = startOfToday - 86400000 // 24 hours earlier
        
        // Get date 7 days ago at midnight
        const oneWeekAgo = startOfToday - (7 * 86400000)
        
        // Strip time from the timestamp date
        const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
        
        // If the timestamp is within today's range
        if (dateWithoutTime >= startOfToday) {
            return "Today"
        }
    
        // If the timestamp is within yesterday's range
        if (dateWithoutTime >= startOfYesterday && dateWithoutTime < startOfToday) {
            return "Yesterday"
        }
    
        // If the timestamp is within the last 7 days
        if (dateWithoutTime >= oneWeekAgo && dateWithoutTime < startOfYesterday) {
            return daysOfWeek[date.getDay()]
        }
    
        // If the timestamp is older than a week, return the original timestamp
        return timestamp
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
                current.classList.remove('mb-5')
                current.querySelector('.chat-message-container').classList.remove('rounded-bl-none')
                
                if (i != elements.length - 2) {
                    next.classList.add('mb-5') 
                }
            }
            else if (avatar1 == null && avatar2 == null) {
                try { 
                    current.classList.remove('mb-5')
                    current.querySelector('.chat-message-container').classList.remove('rounded-br-none')
                    
                    if (i != elements.length - 2) {
                        next.classList.add('mb-5') 
                    }
                } catch(e) { }
            } 
            else {
                if (i != elements.length - 2) {
                    next.classList.add('mb-5') 
                }
            } 
        } 
    } 
    
    static setChatboxDividerTimestamp = () => {
        const chatbox = document.getElementById('chatbox')
        const elements = Array.from(chatbox.children)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }  
       
        const dividerElements = chatbox.querySelectorAll('.divider-timestamp')
        dividerElements.forEach((element) => {
            chatbox.removeChild(element) 
        })

        let prevDate = null
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i]
            const timestamp = element.getAttribute('timestamp')
              
            if (timestamp != null) {
                const currentDate = new Date(parseInt(timestamp))
                const currentLocaleDateString = currentDate.toLocaleDateString('en-US', options)  

                if (prevDate != currentLocaleDateString) { 
                    let dividerTimestampElement = null 
                    const formattedTimestamp = Utils.formatTimestampIntoDaysOfWeek(timestamp)
                    if (formattedTimestamp == timestamp) { 
                        dividerTimestampElement = this.createDividerTimestampElement(currentLocaleDateString)
                    }
                    else { 
                        dividerTimestampElement = this.createDividerTimestampElement(formattedTimestamp)
                    }
                    chatbox.insertBefore(dividerTimestampElement, element)
                } 

                prevDate = currentLocaleDateString 
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

    static saveCaretPosition = (div) => {
        let selection = window.getSelection()
        let range = selection.getRangeAt(0)
        let preCaretRange = range.cloneRange()
        preCaretRange.selectNodeContents(div)
        preCaretRange.setEnd(range.endContainer, range.endOffset)

        return preCaretRange.toString().length // Return caret's offset within the div
    }
    
    static restoreCaretPosition = (div, offset) => {
        let selection = window.getSelection()
        let range = document.createRange()
        let walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null, false)
        let currentNode = walker.nextNode()
        let currentOffset = 0
    
        while (currentNode) {
            let nodeLength = currentNode.length
            if (currentOffset + nodeLength >= offset) {
                // We found the node where caret should be restored
                range.setStart(currentNode, offset - currentOffset)
                range.setEnd(currentNode, offset - currentOffset)
                break
            }
            currentOffset += nodeLength
            currentNode = walker.nextNode()
        }
    
        selection.removeAllRanges()
        selection.addRange(range)
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

    static setViewerJsImageElement = (messageElement, viewer) => {
        const viewerjsContainer = document.getElementById("viewerjs-images-container")
        const imageDiv = messageElement.querySelector('.image')
        const url = imageDiv.getAttribute('url')
        const img = document.createElement('img')
        img.src = url

        const li = document.createElement('li')
        li.appendChild(img)

        viewerjsContainer.appendChild(li)
        const index = viewerjsContainer.childNodes.length - 1
        viewer.update()

        imageDiv.onclick = () => {
            viewer.show()
            viewer.view(index)    
        }
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
        nameParagraph.className = 'outline-none text-sm text-black opacity-80 dark:text-white dark:opacity-90 font-semibold leading-4 tracking-[.01rem] default-outline'
        nameParagraph.tabIndex = 0
        nameParagraph.textContent = name

        const encryptedContainer = document.createElement('div')
        encryptedContainer.className = 'bg-indigo-50 dark:bg-gray-600 rounded p-3 mt-8 mx-5 sm:mx-0'

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
        encryptedText.className = 'flex align-middle outline-none text-xs text-black opacity-80 dark:text-white dark:opacity-90 font-bold leading-4 tracking-[.01rem] default-outline'
        encryptedText.tabIndex = 0
        encryptedText.textContent = 'End-to-end encrypted'

        flexInnerContainer.appendChild(svgIcon)
        flexInnerContainer.appendChild(encryptedText)

        const messageText = document.createElement('div')
        messageText.className = 'text-center mx-auto outline-none text-xs text-black opacity-80 dark:text-white dark:opacity-90 leading-4 tracking-[.01rem] default-outline'
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

    static isTotalImagesToSendNotExceeded = (totalFiles) => {
        const MAX_IMAGES_UPLOAD = 5

        if (totalFiles > MAX_IMAGES_UPLOAD) {
            const title = 'Maximum files to upload exceeded'
            const content = `You can upload a maximum of ${MAX_IMAGES_UPLOAD} files, but you have attempted to upload ${totalFiles} files.`
            Utils.showAlertMessage(title, content) 

            return false
        }

        return true
    }

    static isImageFilesizeNotExceeded = (images) => {
        function toOrdinal(num) {
            if (typeof num !== 'number' || !Number.isInteger(num)) {
                throw new Error('Input must be an integer.');
            }
            
            const suffixes = ["th", "st", "nd", "rd"];
            const v = num % 100;
            
            return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
        }

        const MAX_SIZE_IN_BYTES = 10 * 1024 * 1024; // 10MB
        for (let i = 0; i < images.length; i++) {
            const [key, value] = images[i]
            const filesize = value['file'].size
            if (filesize > MAX_SIZE_IN_BYTES) {
                const title = 'Maximum upload filesize exceeded';
                const content = `The ${toOrdinal(i + 1)} image size (${Math.round(filesize / 1048576)} MB) exceeds the maximum allowed filesize of 10 MB.`;
                Utils.showAlertMessage(title, content) 
                return false
            }
        }

        return true
    }

    static showAlertMessage = (title, content) => {
        const alertMessageContainer = document.getElementById('alert-message-container')
        const alertMessageTitle = alertMessageContainer.querySelector('#alert-message-title')
        const alertMessageContent = alertMessageContainer.querySelector('#alert-message-content')

        alertMessageTitle.textContent = title
        alertMessageContent.textContent = content

        alertMessageContainer.classList.remove('hidden')
        setTimeout(() => {
            alertMessageContainer.classList.add('hidden')
        }, 5000)
    }

    static progressSvgElementCallback = (messageTempElement, percentCompleted) => { 
        const svgCircleElement = messageTempElement.querySelector(".svgCircle")  
        const progressCircleElement = messageTempElement.querySelector(".progressCircle")  
        const imgCheck = messageTempElement.querySelector('.img-check')
        imgCheck.classList.add('hidden')  

        if (percentCompleted == 100) {
            svgCircleElement.classList.add('hidden')
        }
        else {
            svgCircleElement.classList.remove('hidden')
            progressCircleElement.setAttribute("stroke-dashoffset", `calc(251.2px - (251.2px * ${percentCompleted - 1} / 100))`);
        } 
    }

    static reOrderLastFourChatboxElements = () => {
        const chatbox = document.getElementById('chatbox') 
        const chatboxArray = Array.from(chatbox.children)
        const chatboxElements = chatboxArray.slice(-4)
            
        chatboxElements.sort((a, b) => { 
            const timestampA = a.getAttribute('timestamp')
            const timestampB = b.getAttribute('timestamp')
            return timestampA - timestampB
        }).forEach((element) => {
            chatbox.removeChild(element)
            chatbox.appendChild(element)
        })
    }

    static createDividerTimestampElement = (date) => {
        // Create the main container div
        const container = document.createElement('div')
        container.className = 'divider-timestamp w-full my-7 flex items-center justify-center'

        // Create the left border div
        const leftBorder = document.createElement('div')
        leftBorder.className = 'w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0'

        // Create the text element
        const dateElement = document.createElement('p')
        dateElement.className = 'outline-none text-xs font-light text-black opacity-80 dark:text-white dark:opacity-90 leading-4 tracking-[.01rem] mx-2 whitespace-nowrap'
        dateElement.textContent = date

        // Create the right border div
        const rightBorder = document.createElement('div')
        rightBorder.className = 'w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0'

        // Append the elements to the container
        container.appendChild(leftBorder)
        container.appendChild(dateElement)
        container.appendChild(rightBorder)

        // Return the complete container
        return container;
    }

    static createProgressSvgElemet = () => {
        const SVG_NS = "http://www.w3.org/2000/svg";

        // Create the SVG element
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("viewBox", "0 0 100 100")
        // fixed top-0 right-0 left-0 z-50 justify-center items-center
        svg.classList.add("svgCircle", "w-12", "h-12", "hidden", "absolute", "inset-0", "justify-center", "self-center", "m-auto");
        
        // Create the background circle
        const bgCircle = document.createElementNS(SVG_NS, "circle");
        bgCircle.setAttribute("cx", "50");
        bgCircle.setAttribute("cy", "50");
        bgCircle.setAttribute("r", "40");
        bgCircle.setAttribute("fill", "transparent");
        bgCircle.setAttribute("stroke-width", "5");
        bgCircle.classList.add("text-gray-200", "stroke-current");
        
        // Create the progress circle
        const progressCircle = document.createElementNS(SVG_NS, "circle"); 
        progressCircle.setAttribute("cx", "50");
        progressCircle.setAttribute("cy", "50");
        progressCircle.setAttribute("r", "40");
        progressCircle.setAttribute("fill", "transparent");
        progressCircle.setAttribute("stroke-width", "5");
        progressCircle.setAttribute("stroke-linecap", "round");
        progressCircle.setAttribute("stroke-dasharray", "251.2");
        progressCircle.setAttribute("stroke-dashoffset", `calc(251.2px - (251.2px * 1) / 100)`);
        progressCircle.classList.add("progressCircle", "text-indigo-500", "progress-ring__circle", "stroke-current");
        
        // Append elements to the SVG
        svg.appendChild(bgCircle);
        svg.appendChild(progressCircle);

        return svg
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
        flexContainer.classList.add("flex", "relative", "items-center", "outline-none", "gap-2")
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
        waveformDiv.classList.add("w-36") 
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
        timer.classList.add("outline-none", "text-xs", "font-light", "leading-4", "tracking-[.01rem]", "text-black", "dark:text-white", "opacity-80", "dark:opacity-90")
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

        wavesurfer.on('finish', ( ) => {
            wavesurfer.seekTo(0)
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

        const progressSvg = this.createProgressSvgElemet()
        flexContainer.appendChild(progressSvg)
        flexContainer.appendChild(startBtn)
        flexContainer.appendChild(waveformDiv)
        flexContainer.appendChild(timer)
 
        recordInput.appendChild(flexContainer);

        return recordInput
    }

    static createImageMessageElement = (url) => {
        // Create button element
        const divContainer = document.createElement('div')
        divContainer.className = 'outline-none cursor-pointer';

        // Create div for background image
        const imageDiv = document.createElement('div')
        imageDiv.setAttribute('url', url)
        imageDiv.className = 'image relative rounded bg-cover bg-center w-56 h-56'
        imageDiv.style.backgroundImage = `url("${url}")`

        const progressSvg = this.createProgressSvgElemet()

        // Create inner div for overlay
        const overlayDiv = document.createElement('div')
        overlayDiv.className = 'w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-200'

        // Append the overlay div to the image div
        imageDiv.appendChild(progressSvg)
        imageDiv.appendChild(overlayDiv)

        // Append the image div to the button
        divContainer.appendChild(imageDiv)

        return divContainer
    }

    static createVerticalThreeDotsOptionsElement = (placement, type, isIncomingMessage=false) => {
        function getRootParent(node) {
            let current = node;
    
            while (current.parentNode) {
                if (current.getAttribute('messageId')) {
                    break
                }

                current = current.parentNode;
            }
        
            return current;
        }
        function createDropdownElement() {
            // Create the dropdown container
            const dropdownDiv = document.createElement('div');
            dropdownDiv.classList.add('hidden', 'top-0', 'absolute', 'z-[100]', 'w-[12.5rem]', 'mt-2', 'rounded-sm', 'bg-white', 'dark:bg-gray-800', 'shadow-lg', 'border', 'border-gray-100', 'dark:border-gray-600', 'focus:outline-none');
            dropdownDiv.setAttribute('role', 'menu');
            dropdownDiv.setAttribute('aria-orientation', 'vertical');
            dropdownDiv.setAttribute('aria-labelledby', 'menu-button');
            dropdownDiv.setAttribute('tabindex', '-1'); 

            // List of button items
            const buttons = [
                { label: 'Reply', iconPath: 'M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3' },
                { label: 'Copy', iconPath: 'M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z' },
                { label: 'Forward', iconPath: 'M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z' },                     
            ]

            if (type == MessageType.AUDIO || type == MessageType.IMAGE) {
                buttons.splice(1, 1)
            } 

            if (!isIncomingMessage) {
                buttons.push({ label: 'Delete Message', iconPath: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'})
            } 

            // Create buttons
            buttons.forEach(button => { 
                const btn = document.createElement('button');
                btn.classList.add('w-full', 'px-4', 'py-3', 'flex', 'items-center', 'border-b', 'opacity-60', 'dark:opacity-70', 'outline-none', 'text-sm', 'border-gray-200', 'dark:border-gray-600', 'transition-all', 'duration-200', 'text-black',   'hover:bg-gray-50', 'dark:hover:bg-gray-600', 'active:bg-gray-100', 'dark:focus:bg-gray-600');

                if (button.label === 'Delete Message') {
                    btn.classList.add('text-red-500', 'hover:bg-red-50', 'dark:hover:text-red-50', 'active:bg-red-100', 'dark:hover:bg-red-900'); 
                }
                else {
                    btn.classList.add('dark:text-white')
                }

                const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                icon.setAttribute('fill', 'none');
                icon.setAttribute('viewBox', '0 0 24 24');
                icon.setAttribute('stroke-width', '1.5');
                icon.setAttribute('stroke', 'currentColor');
                icon.setAttribute('aria-hidden', 'true');
                icon.classList.add('h-5', 'w-5', 'mr-3'); 
               

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('d', button.iconPath);
                icon.appendChild(path);

                btn.appendChild(icon);
                btn.appendChild(document.createTextNode(button.label));

                dropdownDiv.appendChild(btn);

                btn.onclick = async () => {
                    if (button.label == 'Reply') {

                    }
                    else if (button.label == 'Copy') {
                        const rootNode = getRootParent(btn)
                        const messageData = JSON.parse(rootNode.getAttribute('messageData'))
                        await navigator.clipboard.writeText(messageData.content)

                        dropdown.hide() 
                    }
                    else if (button.label == 'Forward') {

                    }
                    else if (button.label == 'Delete Message') {

                    }
                }
            });

            return dropdownDiv
        }

        const options = document.createElement('div')

        // Create the SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.classList.add('w-5', 'h-5', 'text-neutral-400')
        svg.setAttribute('aria-hidden', 'true')
        svg.setAttribute('fill', 'currentColor')
        svg.setAttribute('viewBox', '0 0 24 24')

        // Create the path element
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', 'M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z')

        // Append the path to the SVG
        svg.appendChild(path)

        const dropdownElement = createDropdownElement()
        const dropdown = new Dropdown(dropdownElement, options, { placement: placement })

        options.classList.add('invisible', 'cursor-pointer') 
        options.appendChild(svg) 
        options.appendChild(dropdownElement)

        options.onclick = () => {
            dropdown.show()
        }

        return options
    }

    static createOutgoingMessageTextElement = (content, timestamp, timeAgo) => {  
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
        const selectNoneDiv = document.createElement('div')
        selectNoneDiv.classList.add('select-none')
 
        const flexDiv = document.createElement('div')
        flexDiv.classList.add('flex', 'justify-end')
 
        const mr4Div = document.createElement('div')
        mr4Div.classList.add('mr-4');
 
        const flexItemsDiv = document.createElement('div')
        flexItemsDiv.classList.add('flex', 'relative', 'items-end')
 
        const chatMessageContainer = document.createElement('div')
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90')
        chatContent.setAttribute('tabindex', '0')
        chatContent.textContent = content
 
        chatMessageContainer.appendChild(chatContent);
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-1.5', 'order-1')
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp

        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.appendChild(timeText) 
        
        const divOptions = document.createElement('div')  
        const options = this.createVerticalThreeDotsOptionsElement('top-end', MessageType.TEXT)

        divOptions.style.height = '100%'
        divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center')

        const img = document.createElement('img')
        img.src = '/gray_checks.svg'
        img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check')
        
        divOptions.appendChild(options)
        divOptions.appendChild(img)
          
        flexItemsDiv.appendChild(chatMessageContainer)
        flexItemsDiv.appendChild(timeDiv)
        flexItemsDiv.appendChild(divOptions)
 
        flexDiv.appendChild(mr4Div)
        flexDiv.appendChild(flexItemsDiv)

        selectNoneDiv.appendChild(flexDiv)
 
        mainDiv.appendChild(selectNoneDiv)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }

    static createOutgoingMessageVoiceElement = (url, timestamp, timeAgo) => {
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
        const selectNoneDiv = document.createElement('div')
        selectNoneDiv.classList.add('select-none')
 
        const flexDiv = document.createElement('div')
        flexDiv.classList.add( 'flex', 'justify-end')
 
        const mr4Div = document.createElement('div')
        mr4Div.classList.add('mr-4');
 
        const flexItemsDiv = document.createElement('div')
        flexItemsDiv.classList.add('flex', 'items-end')
 
        const chatMessageContainer = document.createElement('div')
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90')
        chatContent.setAttribute('tabindex', '0') 

        const voiceElement = this.createVoiceMessageElement(url) 
        chatMessageContainer.appendChild(voiceElement)
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-1.5', 'order-1')
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp

        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.appendChild(timeText) 

        const divOptions = document.createElement('div')  
        const options = this.createVerticalThreeDotsOptionsElement('top-end', MessageType.AUDIO)

        divOptions.style.height = '100%'
        divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center')
 
        const img = document.createElement('img')
        img.src = '/gray_checks.svg'
        img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check')

        divOptions.appendChild(options)
        divOptions.appendChild(img)
 
        flexItemsDiv.appendChild(chatMessageContainer)
        flexItemsDiv.appendChild(timeDiv)
        flexItemsDiv.appendChild(divOptions)
 
        flexDiv.appendChild(mr4Div)
        flexDiv.appendChild(flexItemsDiv)

        selectNoneDiv.appendChild(flexDiv)
 
        mainDiv.appendChild(selectNoneDiv)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }

    static createOutgoingMessageImageElement = (url, timestamp, timeAgo) => {
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
        const selectNoneDiv = document.createElement('div')
        selectNoneDiv.classList.add('select-none')
 
        const flexDiv = document.createElement('div')
        flexDiv.classList.add('flex', 'justify-end')
 
        const mr4Div = document.createElement('div')
        mr4Div.classList.add('mr-4');
 
        const flexItemsDiv = document.createElement('div')
        flexItemsDiv.classList.add('flex', 'relative', 'items-end')
 
        const chatMessageContainer = document.createElement('div')
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600')
        
        const imageContent = this.createImageMessageElement(url)
   
        chatMessageContainer.appendChild(imageContent);
 
        const timeDiv = document.createElement('div')
        timeDiv.classList.add('ml-1.5', 'order-1')
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp

        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.appendChild(timeText) 

        const divOptions = document.createElement('div')  
        const options = this.createVerticalThreeDotsOptionsElement('top-end', MessageType.IMAGE)

        divOptions.style.height = '100%'
        divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center')
 
        const img = document.createElement('img')
        img.src = '/gray_checks.svg'
        img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check')

        divOptions.appendChild(options)
        divOptions.appendChild(img)
          
        flexItemsDiv.appendChild(chatMessageContainer)
        flexItemsDiv.appendChild(timeDiv)
        flexItemsDiv.appendChild(divOptions)
 
        flexDiv.appendChild(mr4Div)
        flexDiv.appendChild(flexItemsDiv)

        selectNoneDiv.appendChild(flexDiv)
 
        mainDiv.appendChild(selectNoneDiv)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }

    static createIncomingMessageTextElement = (content, avatar, timestamp, timeAgo) => {  
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
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
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90')
        chatContent.setAttribute('tabindex', '0')
        chatContent.textContent = content
 
        chatMessageContainer.appendChild(chatContent)
 
        const timeContainer = document.createElement('div') 
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.append(timeText)  
        
        const options = this.createVerticalThreeDotsOptionsElement('top-start', MessageType.TEXT, true)

        chatContainer.appendChild(chatMessageContainer)
        chatContainer.appendChild(timeContainer)
 
        flexDiv.appendChild(avatarDivContainer)
        flexDiv.appendChild(chatContainer)
        flexDiv.appendChild(options)
 
        innerDiv1.appendChild(flexDiv)
 
        mainDiv.appendChild(innerDiv1)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }

    static createIncomingMessageVoiceElement = (url, avatar, timestamp, timeAgo) => {
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
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
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600')
 
        const chatContent = document.createElement('p')
        chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90')
        chatContent.setAttribute('tabindex', '0')

        const voiceElement = this.createVoiceMessageElement(url) 
        chatMessageContainer.appendChild(voiceElement)
 
        const timeContainer = document.createElement('div') 
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.append(timeText) 
 
        const options = this.createVerticalThreeDotsOptionsElement('top-start', MessageType.AUDIO, true)

        chatContainer.appendChild(chatMessageContainer)
        chatContainer.appendChild(timeContainer)
 
        flexDiv.appendChild(avatarDivContainer)
        flexDiv.appendChild(chatContainer)
        flexDiv.appendChild(options)
 
        innerDiv1.appendChild(flexDiv)
 
        mainDiv.appendChild(innerDiv1)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }

    static createIncommingMessageImageElement = (url, avatar, timestamp, timeAgo) => {
        const mainDiv = document.createElement('div')
        mainDiv.setAttribute('timestamp', timestamp)
 
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
        chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600')
 
        const imageElement = this.createImageMessageElement(url)
 
        chatMessageContainer.appendChild(imageElement)
 
        const timeContainer = document.createElement('div') 
 
        const timeText = document.createElement('p')
        timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre')
        timeText.textContent = timestamp
        this.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo)
        mainDiv.append(timeText)  
        
        const options = this.createVerticalThreeDotsOptionsElement('top-start', MessageType.IMAGE, true)

        chatContainer.appendChild(chatMessageContainer)
        chatContainer.appendChild(timeContainer)
 
        flexDiv.appendChild(avatarDivContainer)
        flexDiv.appendChild(chatContainer)
        flexDiv.appendChild(options)
 
        innerDiv1.appendChild(flexDiv)
 
        mainDiv.appendChild(innerDiv1)
        mainDiv.onclick = () => {
            timeText.classList.remove('hidden')
            options.classList.remove('invisible')
        }

        return mainDiv 
    }
}
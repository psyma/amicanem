import { Controller } from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect = () => {
        this.setTwoFactorAuthResendCodeCounter()
    }

    setTwoFactorAuthResendCodeCounter = () => {
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
        var counter = 60
        var intervalId = null

        const element = document.getElementById("resend_code_counter")
        const elementText = document.getElementById("resend_code_text")
        if (element != null) {
            intervalId = setInterval(() => {
                if (counter <= 0) {
                    clearInterval(intervalId) 
                    const atag = document.createElement("a")
                    const form = document.getElementById("form")
                    atag.href = "/2fa-resend-code"
                    atag.className = "flex justify-center text-blue-600 font-bold"
                    atag.textContent = "Resend code"
                    form.appendChild(atag)
                    element.classList.add("hidden")
                    elementText.classList.add("hidden")
                }
                element.textContent = "You can request for a new one in " + formatTime(counter)
                counter -= 1
            }, 1000)
        }
    }
}

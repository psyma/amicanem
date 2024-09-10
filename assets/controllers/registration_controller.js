import { Controller } from '@hotwired/stimulus';
  
export default class extends Controller {
    connect = async () => {
         
    }

    showPassword = (e) => {  
        const inputPassword = document.getElementById(e.params.inputPasswordId)
        const eyeSvg = document.getElementById(e.params.eyeSvg)
        const eyeSvgDefault = document.getElementById(e.params.eyeSvgDefault)
        if (e.params.isShow) {
            eyeSvg.classList.add("hidden")
            eyeSvgDefault.classList.remove("hidden")
            inputPassword.setAttribute("type", "text")
        }
        else {
            eyeSvg.classList.remove("hidden")
            eyeSvgDefault.classList.add("hidden")
            inputPassword.setAttribute("type", "password")
        }
    }  
}

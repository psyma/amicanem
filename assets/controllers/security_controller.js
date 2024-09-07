import { Controller } from '@hotwired/stimulus';

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
         
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

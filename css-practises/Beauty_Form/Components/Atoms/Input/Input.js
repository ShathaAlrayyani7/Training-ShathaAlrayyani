import { validEmail, validPsw1, validPsw2, validSignIn, validUserName } from "../../../utils/validation.js";


export default class Input{
    #input
    constructor(inputType,inputName,inputValue,inputPlaceholder=''){
        this.#input = document.createElement('input');
        this.#input.setAttribute('type', inputType);
        this.#input.setAttribute('name', inputName);
        this.#input.setAttribute('placeholder',inputPlaceholder) ?? ''
        this.#input.setAttribute('value',inputValue);
        this.#input.setAttribute('class',`input-${inputName}`);
        this.#input.addEventListener('input',this.validation)
    }

    get input(){
        return this.#input
    }

    validation =() => {
        let form = document.getElementsByClassName('form')[0]
        if(form .className == 'form login'){
            let email = document.getElementsByClassName('input-email')[0].value
            let psw = document.getElementsByClassName('input-psw')[0].value
            validSignIn(email, psw);
        }
        else{

            let email = document.getElementsByClassName('input-email')[0].value
            validEmail(email)
            let userName = document.getElementsByClassName('input-userName')[0].value
            validUserName(userName)
            let psw1 = document.getElementsByClassName('input-psw')[0].value
            validPsw1(psw1)
            let psw2 = document.getElementsByClassName('input-psw')[1].value
            validPsw2(psw1,psw2)
        }
    }
}
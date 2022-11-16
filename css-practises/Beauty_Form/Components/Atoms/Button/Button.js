'use strict';
import {validEmail, validUserName, validPsw1, validPsw2, validSignIn} from '../../../utils/validation.js'

export default class Button{
    constructor(cls,type,text){
        this.buttonContainer = document.createElement('div')
        let button = document.createElement('button');

        this.buttonContainer.setAttribute('class','buttonContainer');
        button.setAttribute('class',cls);
        button.setAttribute('type', type);
        button.innerText = text;
        this.buttonContainer.appendChild(button);
        if(text == 'Login'){
            button.addEventListener( 'click', this.submit)
        }else{
            button.addEventListener( 'click', this.register)
        }
    }

    get button(){
        return this.buttonContainer
    }

    submit = (e) =>{

        e.preventDefault();
        let email = document.getElementsByClassName(`input-email`)[0].value;
        let psw = document.getElementsByClassName(`input-psw`)[0].value;
        validSignIn(email,psw);

    }

    register = (e) => {

        e.preventDefault();

        let email = document.getElementsByClassName(`input-email`)[0].value;
        validEmail(email)

        let user = document.getElementsByClassName(`input-userName`)[0].value;
        validUserName(user)

        let psw1 = document.getElementsByClassName(`input-psw`)[0].value;
        validPsw1(psw1);

        let psw2 = document.getElementsByClassName(`input-psw`)[1].value;
        validPsw2(psw1,psw2)
        if(validEmail(email) && validUserName(user) && validPsw1(psw1) && validPsw2(psw1,psw2)){
            localStorage.setItem(`${email}`, JSON.stringify([psw1, user]))
        }

    }

}
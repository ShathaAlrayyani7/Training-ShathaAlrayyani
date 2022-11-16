
import { login } from '../../../Constants/login.js';
import {register} from '../../../Constants/register.js';
import FormContainer from '../../Templates/FormContainer/FormContainer.js';

export default class SwitchLink{
    #text
    constructor(type){
        this.#text = document.createElement('div')
        let link = document.createElement('a')
        this.#text.setAttribute('class','text');
        link.setAttribute('class','link');
        link.innerText = 'Click Here';
        
        if(type == 'login'){
            this.#text.innerText = 'Don\'t have an account? ' 
            link.addEventListener('click',this.registerForm)
        }else{
            this.#text.innerText = 'Have an account already? '
            link.addEventListener('click',this.loginForm)
        }
        
        this.#text.appendChild(link);
    }
    
    get switchLink(){
        return this.#text
    }
    registerForm = (e)=>{
        e.preventDefault();
        let app = document.getElementsByClassName('app')[0];
        let form = document.getElementsByClassName('formContainer login')[0]
        form.remove();
        let newForm = new FormContainer('register',register).formContainer
        app.appendChild(newForm)
        }

    loginForm = (e)=>{
        e.preventDefault();
        let app = document.getElementsByClassName('app')[0];
        let form = document.getElementsByClassName('formContainer register')[0]
        form.remove();
        let newForm = new FormContainer('login',login).formContainer
        app.appendChild(newForm);
    }
}
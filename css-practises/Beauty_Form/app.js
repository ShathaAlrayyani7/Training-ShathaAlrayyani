'use strict';

import FormContainer from './Components/FormContainer/formContainer.js';
import {login , register} from './data.js';


let body = document.getElementsByTagName('body')[0];
let form = new FormContainer('login',login).formContainer
body.appendChild(form);

let link = document.getElementsByClassName('link')[0];
console.log(link);
setTimeout(() => link.addEventListener('click',registerForm),1000)

let registerForm = (e)=>{
    e.preventDefault();
    
    let form = document.getElementsByClassName('formContainer login')[0]
    form.remove();
    let newForm = new FormContainer('register',register).formContainer
    body.appendChild(newForm);
}


// export default class App{
//     constructor(){
//         let body = document.getElementsByTagName('body')[0];
//         let form = new FormContainer('login',login)
//         body.appendChild(form);
//     }


// }

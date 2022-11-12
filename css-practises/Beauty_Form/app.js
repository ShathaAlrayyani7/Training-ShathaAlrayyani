'use strict';

import FormContainer from './Components/FormContainer/formContainer.js';
import {login , register} from './data.js';
// console.log(login);

let body = document.getElementsByTagName('body')[0];
let form = new FormContainer('register',register).formContainer
body.appendChild(form);

// export default class App{
//     constructor(){
//         let body = document.getElementsByTagName('body')[0];
//         let form = new FormContainer('login',login)
//         body.appendChild(form);
//     }
// }
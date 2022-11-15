'use strict';

import {login , register} from '../../data.js';
import { fetching } from '../../utils/fetching.js';
let url = 'https://restcountries.com/v2/all'
let data = await fetching(url)
console.log(data);
// let body = document.getElementsByTagName('body')[0];
// let form = new FormContainer('login',login).formContainer
// body.appendChild(form);

// let link = document.getElementsByClassName('link')[0];
// console.log(link);
// setTimeout(() => link.addEventListener('click',registerForm),1000)

// let registerForm = (e)=>{
//     e.preventDefault();
    
//     let form = document.getElementsByClassName('formContainer login')[0]
//     form.remove();
//     let newForm = new FormContainer('register',register).formContainer
//     body.appendChild(newForm);
// }

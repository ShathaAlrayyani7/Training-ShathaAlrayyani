'use strict';
import { login } from '../../Constants/login.js'
import FormContainer from '../Templates/FormContainer/FormContainer.js';


let body = document.getElementsByTagName('body')[0];
let app = document.createElement('div')
app.setAttribute('class','app')

let form = new FormContainer('login',login).formContainer
app.appendChild(form)
body.appendChild(app);



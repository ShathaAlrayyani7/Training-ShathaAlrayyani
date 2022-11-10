'use strict';


import {login,register} from './data.js';
import FormItem from 'Components/Label_Input/label_input.js';


export default class Form{

    constructor(){
        this.form = document.createElement('form');
        this.form.setAttribute('class','form login');
    }

    get form(){
        return this.form
    }


    renderData = () =>{
        let formItem = new FormItem(login).formItem;
        let form = document.getElementsByTagName('form')[0];
        form.appendChild(formItem);
    }

}
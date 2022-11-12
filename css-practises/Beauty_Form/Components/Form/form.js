'use strict';

import {login,register} from '/css-practises/Beauty_Form/data.js';
import Button from '/css-practises/Beauty_Form/Components/Button/button.js'
import FormItem from './FormItem/FormItem.js'

export default class Form{
    #form
    constructor(type,obj){

        this.#form = document.createElement('form');
        this.#form.setAttribute('class',`form ${type}`);
        for(let i =0; i < obj.label.length;i++){

            let formItem = new FormItem(
                obj.label[i].for,
                obj.label[i].text,
                obj.label[i].img,
                obj.input[i].type,
                obj.input[i].name,
                obj.input[i].placeholder,
                obj.input[i].value).formItem;
            this.#form.appendChild(formItem);

        }
        
        let button = new Button(
            obj.button.class,
            obj.button.type,
            obj.button.text,).button;
        this.form.appendChild(button)
    }

    get form(){
        return this.#form
    }

    // renderData = (...obj) =>{
    // }

}
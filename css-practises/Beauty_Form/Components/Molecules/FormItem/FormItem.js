'use strict';

import Input from "../../Atoms/Input/Input.js";
import Label from "../../Atoms/Label/Label.js";
import ValidationText from "../../Atoms/ValidationText/ValidationText.js";

export default class FormItem{
    #formItem
    constructor(labelFor,labelText,iconSrc,inputType,inputName,inputPlaceholder,inputValue){

        this.#formItem = document.createElement('div');
        this.#formItem.setAttribute('class',`formItem ${labelFor}`);
        let item = document.createElement('div')
        item.setAttribute('class','item')
        let label = new Label(labelFor, labelText,iconSrc).label;
        let input = new Input(inputType,inputName,inputPlaceholder,inputValue).input;
        let validationText = new ValidationText(labelFor).validationText;
        item.appendChild(label);
        item.appendChild(input);
        this.#formItem.appendChild(item);
        this.#formItem.appendChild(validationText);
        
    }

    get formItem(){
        return this.#formItem
    }

}
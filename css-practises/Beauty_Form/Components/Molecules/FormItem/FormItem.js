'use strict';

import Input from "../../Atoms/Input/input";
import Label from "../../Atoms/Label/label";
import ValidationText from "../../Atoms/ValidationText/validationText";

export default class FormItem{
    #formItem
    constructor(labelFor,labelText,iconSrc,inputType,inputName,inputPlaceholder,inputValue){

        this.#formItem = document.createElement('div');
        this.#formItem.setAttribute('class',`formItem-${labelFor}`);
        
        let label = new Label(labelFor, labelText,iconSrc);
        let input = new Input(inputType,inputName,inputPlaceholder,inputValue);
        let validationText = new ValidationText(labelFor);
        
        this.#formItem.appendChild(label);
        this.#formItem.appendChild(input);
        this.#formItem.appendChild(validationText);
        
    }

    get formItem(){
        return this.#formItem
    }

}
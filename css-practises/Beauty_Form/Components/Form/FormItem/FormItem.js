'use strict';

export default class FormItem{

    constructor(labelFor,labelText,iconSrc,inputType,inputName,inputPlaceholder,inputValue){

        this.formItemContainer = document.createElement('div');
        let label = document.createElement('label');
        let icon = (iconSrc) ? document.createElement('img'):''
        let input = document.createElement('input');

        this.formItemContainer.setAttribute('class','formItemContainer');

        label.setAttribute('for', labelFor)
        label.innerText = labelText
        iconSrc ? icon.setAttribute('src', iconSrc) : '';
        (iconSrc) ? icon.setAttribute('class', 'iconImg') : '';

        input.setAttribute('type', inputType);
        input.setAttribute('name', inputName);
        input.setAttribute('placeholder',inputPlaceholder) ?? ''
        input.setAttribute('value',inputValue)

        iconSrc ? label.appendChild(icon) : '';
        this.formItemContainer.appendChild(label);
        this.formItemContainer.appendChild(input);

    }

    get formItem(){
        return this.formItemContainer
    }

}
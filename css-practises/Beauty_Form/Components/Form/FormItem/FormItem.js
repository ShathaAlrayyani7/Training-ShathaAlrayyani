'use strict';

export default class FormItem{

    constructor(labelFor,labelText,iconSrc,inputType,inputName,inputPlaceholder,inputValue){

        this.formItemContainer = document.createElement('div');
        let labelContainer = document.createElement('div');
        let label = document.createElement('label');
        let icon = (iconSrc) ? document.createElement('img'):''
        let input = document.createElement('input');
        let validation = document.createElement('p');

        this.formItemContainer.setAttribute('class','formItemContainer');
        labelContainer.setAttribute('class','labelContainer')
        label.setAttribute('for', labelFor)
        label.innerText = labelText
        iconSrc ? icon.setAttribute('src', iconSrc) : '';
        (iconSrc) ? icon.setAttribute('class', 'iconImg') : '';

        input.setAttribute('type', inputType);
        input.setAttribute('name', inputName);
        input.setAttribute('placeholder',inputPlaceholder) ?? ''
        input.setAttribute('value',inputValue);
        input.setAttribute('class',`input-${inputName}`)

        validation.setAttribute('class', `valid-${inputName}`)

        iconSrc ? label.appendChild(icon) : '';

        labelContainer.appendChild(label);
        labelContainer.appendChild(input);

        this.formItemContainer.appendChild(labelContainer);
        this.formItemContainer.appendChild(validation)

    }

    get formItem(){
        return this.formItemContainer
    }

}
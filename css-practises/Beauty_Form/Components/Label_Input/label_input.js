'use strict';

export default class FormItem{

    constructor(array){

        this.labelContainer = document.createElement('div');
        let label = document.createElement('label');
        let icon = (array.form.iconSrc) ? document.createElement('img'):''
        let input = document.createElement('input');

        this.labelContainer.setAttribute('class','labelContainer');

        for (let i = 0; i < array.length; i++) {
            
            label.setAttribute('for',array[i].labelFor)
            label.innerText = array.labelText
            icon.setAttribute('src', array.label.iconSrc) ?? '';
            (array.label.iconSrc)? icon.setAttribute('alt', array.label.iconAlt):'';
            
            input.setAttribute('type',array.input.type);
            input.setAttribute('name',array.input.name);
    
            label.appendChild(icon) ?? '';
            this.labelContainer.appendChild(label);
            this.labelContainer.appendChild(input);
            
        }

    }

    get formItem(){
        return this.labelContainer
    }
}
'use strict';


export default class Button{
    constructor(array){
        this.buttonContainer = document.createElement('div')
        let button = document.createElement('button');

        this.buttonContainer.setAttribute('class','buttonContainer');
        button.setAttribute('class',array.button.class);
        button.setAttribute('type', array.button.type);
        button.innerText = array.button.text;
        this.buttonContainer.appendChild(button);
        
    }

    get button(){
        return this.buttonContainer
    }

}
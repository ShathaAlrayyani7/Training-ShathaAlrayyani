'use strict';

export default class Button{
    constructor(cls,type,text){
        this.buttonContainer = document.createElement('div')
        let button = document.createElement('button');

        this.buttonContainer.setAttribute('class','buttonContainer');
        button.setAttribute('class',cls);
        button.setAttribute('type', type);
        button.innerText = text;
        // button.addEventListener( eventName, event )
        this.buttonContainer.appendChild(button);

        
    }

    get button(){
        return this.buttonContainer
    }

}
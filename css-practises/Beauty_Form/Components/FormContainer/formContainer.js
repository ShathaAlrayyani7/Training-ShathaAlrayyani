'use strict';

import Form from '../Form/form.js';
import ImgContainer from '../ImgContainer/imgContainer.js';

export default class FormContainer{
    #formContainer
    constructor(type,obj){

        this.#formContainer = document.createElement('div');
        let form = new Form(type,obj).form;
        let imgContainer = new ImgContainer().imgContainer;

        this.#formContainer.setAttribute('class','formContainer');

        this.#formContainer.appendChild(form);
        this.#formContainer.appendChild(imgContainer);
    }

    get formContainer(){
        return this.#formContainer
    }
}
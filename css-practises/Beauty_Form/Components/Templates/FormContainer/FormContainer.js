'use strict';

import Form from "../../Organisms/Form/Form.js";
import BackgroundImg from "../../Molecules/BackgroundImg/BackgroundImg.js";

export default class FormContainer{
    #formContainer
    constructor(type,obj){
        this.#formContainer = document.createElement('div');

        let form = new Form(type, obj).form;
        this.#formContainer.appendChild(form);
        let backgroundImg = new BackgroundImg(type).backgroundImg;
        this.#formContainer.setAttribute('class',`formContainer ${type}`);
        this.#formContainer.appendChild(backgroundImg);
        
    }

    get formContainer(){
        return this.#formContainer
    }
}
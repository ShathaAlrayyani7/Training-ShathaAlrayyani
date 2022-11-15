'use strict';

import Form from "../../Molecules/Form/form";
import ImgContainer from "../../Molecules/ImgContainer/imgContainer";

export default class FormContainer{
    #formContainer
    constructor(type,obj){

        this.#formContainer = document.createElement('div');
        let form = new Form(type,obj).form;
        let imgContainer = new ImgContainer(type).imgContainer;
        this.#formContainer.setAttribute('class',`formContainer ${type}`);
        this.#formContainer.appendChild(form);
        this.#formContainer.appendChild(imgContainer);
    }

    get formContainer(){
        return this.#formContainer
    }
}
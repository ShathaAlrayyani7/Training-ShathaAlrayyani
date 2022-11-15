
import Button from '../Atoms/Button/button.js'
import FormItem from '../Atoms/FormItem/FormItem.js';
import Gender from '../../Molecules/Gender/gender.js';
import FormTitle from '../../Atoms/FormTitle/formTitle.js';
import TextLink from '../../Atoms/TextLink/textLink.js';

export default class Form{
    #form
    constructor(type,obj){

        this.#form = document.createElement('form');
        this.#form.setAttribute('class',`form ${type}`);
        let title = new FormTitle(type).formTitle

        this.#form.appendChild(title);

        for(let i =0; i < obj.label.length;i++){

            let formItem = new FormItem(
                obj.label[i].for,
                obj.label[i].text,
                obj.label[i].img,
                obj.input[i].type,
                obj.input[i].name,
                obj.input[i].placeholder,
                obj.input[i].value).formItem;
            this.#form.appendChild(formItem);
        }
        
        let gender = new Gender()

        let button = new Button(
            obj.button.class,
            obj.button.type,
            obj.button.text,).button;
        
        let link = new TextLink(type).textLink
        this.#form.appendChild(gender);
        this.#form.appendChild(link);
        this.#form.appendChild(button);
        
    }

    get form(){
        return this.#form
    }

}
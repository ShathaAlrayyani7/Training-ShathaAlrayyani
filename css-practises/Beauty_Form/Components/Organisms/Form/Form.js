
import Button from '../../Atoms/Button/Button.js'
import FormItem from '../../Molecules/FormItem/FormItem.js';
import FormTitle from '../../Atoms/FormTitle/FormTitle.js';
import SwitchLink from '../../Atoms/SwitchLink/SwitchLink.js';
import { country_list } from '../../../Constants/countries.js';
import Select from '../../Molecules/Select/Select.js';
import Radio from '../../Molecules/Radio/Radio.js';
import { gender } from '../../../Constants/gender.js'


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
                    obj.input[i].value,
                    obj.input[i].placeholder,
                    ).formItem;
                this.#form.appendChild(formItem);
            }

            if (type == 'register') {
                let country =  new Select(country_list,'Select a Country').select
                this.#form.appendChild(country)
                let radio = new Radio(gender).radio    
                this.#form.appendChild(radio);
            }
            let button = new Button(
                obj.button.class,
                obj.button.type,
                obj.button.text,).button;
        
            let link = new SwitchLink(type).switchLink
    
            this.#form.appendChild(link);
            this.#form.appendChild(button);
    }


    get form(){
        return this.#form
    }

}
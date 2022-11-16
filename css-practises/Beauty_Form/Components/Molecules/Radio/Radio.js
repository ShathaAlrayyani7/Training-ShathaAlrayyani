import Input from "../../Atoms/Input/Input.js";
import Label from "../../Atoms/Label/Label.js";

export default class Radio{

    #radio
    constructor(obj){

        this.#radio = document.createElement('div');
        this.#radio.setAttribute('class','radio')
        
        for(let i = 0 ; i < obj.input.length;i++){
            let radioItem = document.createElement('div')
            let input = new Input(obj.input[i].type, obj.input[i].name, obj.input[i].value).input
            let label = new Label(obj.label[i].for, obj.label[i].text).label;
            radioItem.appendChild(input);
            radioItem.appendChild(label);
            this.#radio.appendChild(radioItem)
        } 
    }

    get radio(){
        return this.#radio
    }
}
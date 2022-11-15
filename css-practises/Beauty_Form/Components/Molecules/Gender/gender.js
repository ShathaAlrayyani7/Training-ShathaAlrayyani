import { genderLabel } from "../../../data";
import Input from "../../Atoms/Input/input";
import Label from "../../Atoms/Label/label";

export default class Gender{

    #gender
    constructor(){

        this.#gender = document.createElement('div');

        for(let i = 0 ; i < genderLabel.length;i++){
            let input = new Input(genderLabel.input[i].type, genderLabel.input[i].name, genderLabel.input[i].value)
            let label = new Label(genderLabel.label[i].for,genderLabel.label[i].text);
            this.#gender.appendChild(input);
            this.#gender.appendChild(label);
        } 
    }

    get gender(){
        return this.#gender
    }
}

import {validEmail, validUserName, validPsw1, validPsw2, validSignIn} from '../../utils/function.js'
import Button from '/css-practises/Beauty_Form/Components/Button/button.js'
import FormItem from './FormItem/FormItem.js'

export default class Form{
    #form
    constructor(type,obj){

        this.#form = document.createElement('form');
        this.#form.setAttribute('class',`form ${type}`);
        let title = document.createElement('h1');
        title.setAttribute('class','title');
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

        let button = new Button(
            obj.button.class,
            obj.button.type,
            obj.button.text,).button;

        if(this.#form.className == 'form login'){
            title.innerText = "Login"
            button.addEventListener( 'click', this.submit)
            let text = document.createElement('div');
            let link = document.createElement('a');

            text.setAttribute('class','text');
            link.setAttribute('class','link')
            link.innerText = 'Click Here';
            text.innerText = 'To Create Your Account '
            text.appendChild(link);
            this.#form.appendChild(text)

        }else{
            title.innerText = "Register"
            button.addEventListener( 'click', this.register)
        }
        
        this.form.appendChild(button)
        
    }

    get form(){
        return this.#form
    }


    submit = (e) =>{

        e.preventDefault();

        let email = document.getElementsByClassName(`input-email`)[0].value;
        let psw = document.getElementsByClassName(`input-psw`)[0].value;
        validSignIn(email,psw);

    }

    register = (e) => {

        e.preventDefault();

        let email = document.getElementsByClassName(`input-email`)[0].value;
        console.log(email);
        validEmail(email)

        let user = document.getElementsByClassName(`input-userName`)[0].value;
        console.log(user);
        validUserName(user)

        let psw1 = document.getElementsByClassName(`input-psw`)[0].value;
        validPsw1(psw1);

        let psw2 = document.getElementsByClassName(`input-psw`)[1].value;
        validPsw2(psw1,psw2)
        if(validEmail(email)==true && validUserName(user)==true && validPsw1(psw1)==true && validPsw2(psw1,psw2)==true){
            localStorage.setItem(`${email}`, JSON.stringify([psw1, user]))
        }

    }


}
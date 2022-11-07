'use strict'


class Form{
    constructor(){
        this.form = document.createElement('form')

        let email = document.createElement('label');
        let emailIcon = document.createElement('img');
        let emailInput = document.createElement('input');

        let userName = document.createElement('label');
        let userNameIcon = document.createElement('img');
        let userNameInput = document.createElement('input');
        
        let password = document.createElement('label');
        let passwordIcon = document.createElement('img');
        let passwordInput = document.createElement('input');
        
        let password2 = document.createElement('label');
        let password2Icon = document.createElement('img');
        let password2Input = document.createElement('input');
        let submit = document.createElement('button')


    }

    getForm = () =>{
        return this.form
    }
}

let form = new Form()
form.getForm()

'use strict';

let login ={
    label:[
        {
            for : "email",
            img : "",
            text :"Email",
        },
        {
            for : "psw",
            img : "",
            text :"Password",
        },
    ],
    input:[
        {
            name : "email",
            type :"text",
            placeholder:"e.g name@name.com"
        },
        {
            name : "psw",
            type :"password",
            placeholder:"e.g name@name.com"
        },
    ],
    button:{
        class:'',
        type:'submit',
        text:'Login',
        event: this.submit
    }
}


let register = {
        label:[
            {
                "label_for" : "",
                "img" : "",
                "type" :"",
                "value" : ""
            },
            {
                "label_for" : "",
                "img" : "",
                "type" :"",
                "value" : ""
            },
            {
                "label_for" : "",
                "img" : "",
                "type" :"",
                "value" : ""
            },
            {
                "label_for" : "",
                "img" : "",
                "type" :"",
                "value" : ""
            },
            {
                "label_for" : "",
                "img" : "",
                "type" :"",
                "value" : ""
            }
    
        ],
        button:{
            class:'',
            type:'',
            text:'',
            event: this.register
        }
    }

export default {login,register};
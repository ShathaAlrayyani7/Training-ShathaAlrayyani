'use strict';

export const login ={
    label:[
        {
            for : "email",
            img : "./assets/icons8-secured-letter-64.png",
            text :"",
            
        },
        {
            for : "psw",
            img : "./assets/icons8-security-shield-green-100.png",
            text :"",
        },
    ],
    input:[
        {
            name : "email",
            type :"text",
            placeholder:"Email",
            value:""
        },
        {
            name : "psw",
            type :"password",
            placeholder:"",
            value:""
        },
    ],
    button:{
        class:'button',
        type:'submit',
        text:'Login',
        eventName:'onsubmit',
    }
}


export const register = {
        label:[
            {
                for : "email",
                img : "./assets/icons8-secured-letter-64.png",
                text :"",
            },
            {
                for : "userName",
                img : "./assets/icons8-account-64.png",
                text :"",
            },
            {
                for : "psw",
                img : "./assets/icons8-security-shield-green-100.png",
                text :"",
            },
            {
                for : "psw",
                img : "./assets/icons8-security-shield-green-100.png",
                text :"",
            },
            {
                for : "gender1",
                img : "",
                text :"Male",
            },
            {
                for : "gender2",
                img : "",
                text :"Female",
            },
        
        ],
        input:[
            {
                name : "email",
                type :"text",
                placeholder:"e.g name@name.com",
                value:""
            },
            {
                name : "userName",
                type :"text",
                placeholder:"User Name",
                value:""
            },
            {
                name : "psw",
                type :"password",
                placeholder:"Password",
                value:""
            },
            {
                name : "psw",
                type :"password",
                placeholder:"Password 2",
                value:""
            },
            {
                name : "gender",
                type :"radio",
                placeholder:"",
                value:"Male"
            },
            {
                name : "gender",
                type :"radio",
                placeholder:"",
                value:"Female"
            }
        ],
        button:{
            class:'button',
            type:'submit',
            text:'Register',

        }
    }

// export default { login, register};

export const login = {
    label:[
        {
            for : "email",
            img : "./assets/icons8-secured-letter-64 (1).png",
            text :"",
            
        },
        {
            for : "psw",
            img : "./assets/icons8-security-shield-green-50.png",
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
            placeholder:"Password",
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

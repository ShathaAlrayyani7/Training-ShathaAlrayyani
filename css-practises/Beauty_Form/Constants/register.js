
export const register = {
    label: [
        {
            for: "email",
            img: "./assets/icons8-secured-letter-64 (1).png",
            text: "",
        },
        {
            for: "userName",
            img: "./assets/icons8-account-64 (1).png",
            text: "",
        },
        {
            for: "psw1",
            img: "./assets/icons8-security-shield-green-50.png",
            text: "",
        },
        {
            for: "psw2",
            img: "./assets/icons8-security-shield-green-50.png",
            text: "",
        },


    ],
    input: [
        {
            name: "email",
            type: "text",
            placeholder: "e.g name@name.com",
            value: ""
        },
        {
            name: "userName",
            type: "text",
            placeholder: "User Name",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password",
            value: ""
        },
        {
            name: "psw",
            type: "password",
            placeholder: "Password 2",
            value: ""
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Male"
        },
        {
            name: "gender",
            type: "radio",
            placeholder: "",
            value: "Female"
        }
    ],
    button: {
        class: 'button',
        type: 'submit',
        text: 'Register',

    }
}

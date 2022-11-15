
export const validEmail = (mail)=>{
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validMsg = document.getElementsByClassName('valid-email')[0];
    let text = '';

    if (regx.test(mail)){
        validMsg.innerText = text
        return true
    }else{
        text = "You have entered an invalid email address!"
        validMsg.innerText = text
        return false
    }

}

export const validUserName = (psw)=>{
    let regx = /[a-z]/;
    let validMsg = document.getElementsByClassName('valid-userName')[0];
    let text = '';

    if (regx.test(psw)){
        validMsg.innerText = text
        return true
    }else{
        text = `Only lowercase characters allowed`
        validMsg.innerText = text
        return false
    }
}

export const validPsw1 = (psw)=>{
    let regx = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let text = ''
    let validMsg = document.getElementsByClassName('valid-psw')[0];
    let numbers = /[0-9]/g
    let uppercase = /[A-Z]/g
    if (regx.test(psw)){
        validMsg.innerText = text
        return true
    }else{
        if(psw.length < 8 || psw.legth> 16){
            let text1 = ` -Your password must be more than 8 characters and less than 16 \n`
            validMsg.innerText = text1
        }
        if(!psw.match(numbers)){
            let text2 =  `-Your password must contain at least one digit`
            validMsg.innerText += text2
        }
        if(!psw.match(uppercase)){
            let text3 = `-Your password must contain at least one uppercase letter.\n`
            validMsg.innerText += text3
        }
        return false
    }
}

export const validPsw2 = (psw1,psw2)=>{
    validPsw1(psw1)
    let validMsg = document.getElementsByClassName('valid-psw')[1];
    let text = ''

    if (psw1 === psw2){
        validMsg.innerText = text
        return true
    }else{
        text = `Please Enter the Same Password`
        validMsg.innerText = text
        return false
    }

}

export const validSignIn =(email,psw)=>{

    let validMail = document.getElementsByClassName('valid-email')[0];
    let validPass = document.getElementsByClassName('valid-psw')[0];
    let data = JSON.parse(localStorage.getItem(`${email}`))
    let text = ''

    if (data == '' || data == null || data == 'undefined'){
        text = "You Entered Invalid Email Address!"
        validMail.innerText = text;
    }else{
        validMail.innerText = text;
        if(`${psw}` == data[0]) {
            validPass.innerText = text
            return true
        } else {
            let text2 = 'Please make sure to write the password correctly'
            validPass.innerText = text2
            return false
        }
    }


}

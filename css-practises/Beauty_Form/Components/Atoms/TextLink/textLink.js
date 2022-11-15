

export default class TextLink{
    #text
    constructor(type){
        this.#text = document.createElement('p')
        let link = document.createElement('a')
        this.#text.setAttribute('class','text');
        link.setAttribute('class','link');

        this.#text.appendChild(link);
        
        if(type == 'login'){
            this.#text.innerText = 'Don\'t have an account? '
        }else{
            this.#text.innerText = 'Have an account already? '
        }
        
        link.innerText = 'Click Here';
    }

    get textLink(){
        return this.#text
    }
}

export default class FormTitle{
    #formTitle
    constructor(type){

        this.#formTitle = document.createElement('h1');
        this.#formTitle.setAttribute('class','title');

        if(type == 'login'){
            this.#formTitle.innerText ='Login'
        }else{
            this.#formTitle.innerText ='Register'
        }
    }
    get formTitle(){
        return this.#formTitle;
    }
}
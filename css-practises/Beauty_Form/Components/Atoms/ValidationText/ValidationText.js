
export default class ValidationText{
    #validationText
    constructor(type){
        this.#validationText = document.createElement('p');
        this.#validationText.setAttribute('class',`valid ${type}`)
        // this.#validationText.innerText= text
    }
    
    get validationText(){
        return this.#validationText
    }
    
}
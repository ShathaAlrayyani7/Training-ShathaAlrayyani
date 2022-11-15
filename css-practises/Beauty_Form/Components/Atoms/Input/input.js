

export default class Input{
    #input
    constructor(inputType,inputName,inputValue,inputPlaceholder=''){
        this.#input = document.createElement('input');
        this.#input.setAttribute('type', inputType);
        this.#input.setAttribute('name', inputName);
        this.#input.setAttribute('placeholder',inputPlaceholder) ?? ''
        this.#input.setAttribute('value',inputValue);
        this.#input.setAttribute('class',`input-${inputName}`);
        this.#input.addEventListener('input',this.validation)
    }

    get input(){
        return this.#input
    }

    // validation =(){

    // }
}
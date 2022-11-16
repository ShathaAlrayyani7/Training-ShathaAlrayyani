
export default class Option{
    #option
    constructor(option){
        this.#option = document.createElement('option');
        this.#option.innerText = option;
    }

    get option(){
        return this.#option
    }
}
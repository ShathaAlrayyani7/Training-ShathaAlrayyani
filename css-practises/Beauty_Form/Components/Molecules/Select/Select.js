import Option from "../../Atoms/Option/Option.js";

export default class Select{
    
    #url = 'https://restcountries.com/v2/all';
    #select
     constructor(data,text) {
            this.#select = document.createElement('select');
            this.#select.setAttribute('class','select')
            let option = new Option(text).option
            this.#select.appendChild(option)
            for(let i = 0 ; i < data.length ; i++){
                let options = new Option(data[i]).option
                this.#select.appendChild(options)
            }
    }

    get  select(){
        return this.#select
    }

}


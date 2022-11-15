import { fetching } from "../../../utils/fetching";

export default class Countries{
    
    #url = 'https://restcountries.com/v2/all'
     constructor() {
    	(async function() {
        this.countries = document.createElement('select');
        this.countries.setAttribute('class','select')
        this.countries.setAttribute('placeholder','Select a Country')
        let data = await fetching(this.#url)
        for(let i = 0 ; i < data.length ; i++){
            let option = document.createElement('option')
            option.innerText = data[i].name
            this.countries.appendChild(option)
        }
    })}

    get country(){
        return this.countries
    }
}



export default class Label{
    #label
    constructor(labelFor, labelText,iconSrc=''){

        this.#label = document.createElement('label');
        let icon = (iconSrc) ? document.createElement('img'):''
        this.#label.setAttribute('for', labelFor)
        this.#label.innerText = labelText
        iconSrc ? icon.setAttribute('src', iconSrc) : '';
        (iconSrc) ? icon.setAttribute('class', 'iconImg') : '';
        iconSrc ? this.#label.appendChild(icon) : '';

    }

    get label(){
        return this.#label
    }
}
'use strict'

let data =require('./css-practises/Beauty_Form/data.json') 
console.log(data);
// class RadioLabel{
//     constructor(arr){
//         this.item = document.createElement('div');
//         for(let i =0 ; i< arr.length ; i++){
//             let label = document.createElement('label');
//             let input = document.createElement('input');
//             this.item.appendChild(label)
//             this.item.appendChild(input)
//         }
//     }
// }

class FormItem{
    constructor(title,icons,type,value){ 
        this.item = document.createElement('div')
        let label = document.createElement('label');
        let icon = document.createElement('img');
        let input = document.createElement('input');

        label.appendChild(icon)
        this.item.appendChild(label)
        this.item.appendChild(input)
    }

    get getItems(){
        return this.item
    }
}

class Form{
    constructor(){
        this.form = document.createElement('form')

    }

    get form(){
        return this.form
    }

}


class Img{
    constructor(){
        this.imgContainer = document.createElement('div');
        let img = document.createElement('img');
        

    }
}



export default Form;


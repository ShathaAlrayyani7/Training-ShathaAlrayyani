/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

Array.prototype.sortArr = function(){
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length;j++){
            if(this[i]<this[j]){
                let temp = this[i]
                this[i] = this[j]
                this[j] = temp
            }
        }
    }
    return this
}

Array.prototype.getFirst = function(){
    return this[0]
}

Array.prototype.getLast = function (){
    return this[this.length-1]
}

Array.prototype.search =  function(x){
    for(let i=0; i< this.length; i++){
        if (this[i] == x){
            return true
        }     
    }
    return false
 }



let temp = [3,1,6,2]

console.log("*********")
console.log(temp.sortArr())
console.log("*********")
console.log(temp.getFirst())
console.log("*********")
console.log(temp.getLast())
console.log("*********")
console.log(temp.search(7))



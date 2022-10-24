/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO
function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function getFirst(arr){
    return arr[0]
}

function getLast(arr){
    return arr[arr.length-1]
}

 function search(arr,x){
    for(let i=0; i< arr.length; i++){
        if (arr[i] == x){
            return true
        }
        else{
            return false
        }
        
    }
 }
let temp = [3,1,6,2]

console.log(sortArr(temp))
console.log("*********")
console.log(getFirst(temp))
console.log("*********")
console.log(getLast(temp))
console.log("*********")
console.log(search(temp,7))



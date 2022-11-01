'use strict';


async function fetching() {
    let url = "https://jsonplaceholder.typicode.com/photos";
    let response = await fetch(url)
    let data = await response.json()
    return data
}

function generateRandomColor(){
    let colorHex = []

    for(let i = 0;i<3000;i++){
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        colorHex.push(`${randColor.toUpperCase()}`)
    }
    return colorHex
}
localStorage.setItem("selectedColors",JSON.stringify([]));

let selectedColors=[];

function addcolor(e) {
    let data =document.getElementById(e).getAttribute("data-color");
    let selectedColors = JSON.parse(localStorage.getItem('selectedColors'));
    let button = document.getElementById(`btn${e}`);
    let bgColor = button.getAttributeNode("style").value;
    let card = document.getElementById(`card${e}`);

    if(bgColor == "background-color:lightgreen"){
        let index = selectedColors.indexOf(colorName[data])
        selectedColors.splice(index,1);
        button.setAttribute("style", "background-color:cadetblue")
        card.style.transform ="scale(1)";
        card.style.transition = "all 1s"
    }
    else{
        selectedColors.push(colorName[data])
        button.setAttribute("style", "background-color:lightgreen")
        card.style.transform ="scale(1.07)";
        card.style.transition = "all 1s"
    }

    let count = document.getElementById("count");
    let name = document.getElementById("name");
    name.innerHTML = `Selected Colors: ${selectedColors}`
    count.innerHTML = `count of selected cards: ${selectedColors.length}`
    localStorage.setItem("selectedColors",JSON.stringify(selectedColors));
}

let colorName = {};
async function getName(arr) {
    for(let i=0; i<arr.length;i++){
        let url = `https://www.thecolorapi.com/id?hex=${arr[i]}`
        let response = await fetch(url)
        let data = await response.json()
        colorName[`${arr[i]}`] = data.name.value
    }
 };

let hex = generateRandomColor()

async function cards() {
    let data = await fetching()
    let section = document.createElement("div");
    section.className = "section"
    let card = document.createElement("div");
    card.className = "card"
    let bgColor = document.createElement("div");
    bgColor.className ="bgColor"
    let text1 = document.createElement("h3");
    let out ="";
    for(let i=0; i<20;i++){

        out +=`
        <div class = "card" id="card${data[i].id}">
        <div class = "bgColor" data-color="${hex[i]}" id="${data[i].id}" style="background-color:#${hex[i]};"> </div>
        <div class="info">
        <h3> ${data[i].title} </h3>
        <br/>
        <h4> ${data[i].title} </h4>
        </div>
        <button class="select" id="btn${data[i].id}" onclick="addcolor(${data[i].id})" style="background-color:cadetblue"> Sellect </button>
        </div>
        `
    }
    section.innerHTML=out
    document.body.appendChild(section)
}


getName(hex)
cards()
console.log(colorName);


// window.addEventListener('scroll' ,() =>{
//     let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     let scrolled = window.scrollY ;
//     if(Math.ceil(scrolled) === maxScroll){

//     }

// })
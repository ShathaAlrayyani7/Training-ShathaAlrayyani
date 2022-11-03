'use strict';

class Card {

    constructor(title, id, hex){
        this.card = document.createElement("div")
        this.cardButton = document.createElement("button");
        this.selectedColors = localStorage.setItem("selectedColors", JSON.stringify([]))

        // Creating the elements for the card
        this.boxColor = document.createElement("div");
        let cardTitle = document.createElement("h3");
        let cardText = document.createElement("h4");
        let info = document.createElement('div');

        // adding attributes to elements:
        this.card.setAttribute('class', 'card');
        this.card.setAttribute('id', `card${id}`);
        this.boxColor.setAttribute('class', 'bgColor');
        this.boxColor.setAttribute('id', `box${hex}`);
        this.boxColor.setAttribute('data-color', `${hex}`)
        this.boxColor.setAttribute('style', `background-color:#${hex}`);
        info.setAttribute('class', 'info');
        this.cardButton.setAttribute('class', 'select');
        this.cardButton.setAttribute('id', `btn${hex}`);
        this.cardButton.setAttribute('style', 'background-color:cadetblue')
        this.cardButton.addEventListener("click", this.addcolor);


        this.cardButton.innerText = 'Sellect';
        cardTitle.innerText = title ?? '';
        cardText.innerText = title ?? '';

        info.appendChild(cardTitle);
        info.appendChild(cardText);

        this.card.appendChild(this.boxColor);
        this.card.appendChild(info);
        this.card.appendChild(this.cardButton);
    }

    getCard = () => {
        return this.card;
    };

    generateRandomColor = () => {
        let colorHex = []

        for (let i = 0; i < 20; i++) {
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal;
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);
            colorHex.push(`${randColor.toUpperCase()}`)
        }
        return colorHex
    }

    getName = async (hexArr) => {

        let url = `https://www.thecolorapi.com/id?hex=${hexArr}`

        try {
            const response =  await fetch(url)
            const data =  await response.json()
        
            const colorName = data.name.value
            return colorName

        } catch (error) {
            console.log("There is no data", error);

        }
    };

    // header = (selectedColors) => {
    // }

    addcolor = async() => {
        console.log("Hi");
        const classList = Object.values(this.card.classList ?? {});
        console.log(classList);
        let hex = this.boxColor.getAttribute('data-color');
        this.selectedColors = JSON.parse(localStorage.getItem('selectedColors'));
        console.log(localStorage.getItem('selectedColors'));
        let colorName = await this.getName(hex)
    


        console.log(colorName);


        if (classList.includes('selected')) {
            this.card.classList.remove('selected');
            let index = this.selectedColors.indexOf(colorName)
            console.log(this.selectedColors);
            console.log(this.selectedColors);
            this.selectedColors.splice(index, 1);
            this.cardButton.setAttribute("style", "background-color:cadetblue")
            this.card.style.transform = "scale(1)";
            this.card.style.transition = "all 1s";
            this.cardButton.innerText = 'Select'

        } else {
            this.card.classList.add('selected');
            this.selectedColors.push(colorName)
            this.cardButton.setAttribute("style", "background-color:lightgreen")
            // console.log();
            this.card.style.transform = "scale(1.07)";
            this.card.style.transition = "all 1s"
            this.cardButton.innerText = 'Selected'
        }

        let count = document.getElementById('count');
        let name = document.getElementById('name');

        name.innerHTML = `Selected Colors: ${this.selectedColors}`
        count.innerHTML = `count of selected cards: ${this.selectedColors.length}`
        localStorage.setItem("selectedColors", JSON.stringify(this.selectedColors));
        console.log(this.selectedColors);


    }


}


class AllData {

    constructor() {
        let body = document.getElementsByTagName('body')[0];
        let container = document.createElement('div');
        let cardCont = document.createElement('div')
        let header = document.createElement('header');
        let title = document.createElement('h2');
        let count = document.createElement('h3');
        let name = document.createElement('h3');

        container.setAttribute('class', 'container');
        header.setAttribute('class','header')
        cardCont.setAttribute('class', 'section');
        cardCont.setAttribute('id', 'section');
        count.setAttribute('class', 'infoText');
        count.setAttribute('id', 'count');
        name.setAttribute('class', 'infoText');
        name.setAttribute('id', 'name');

        title.innerText = 'Lorem Ipsum';
        count.innerHTML = `count of selected cards: 0`
        name.innerHTML = `Selected Colors:`

        header.appendChild(title);
        header.appendChild(count);
        header.appendChild(name);
        container.appendChild(header)
        container.appendChild(cardCont)
        body.appendChild(container)
    }

    drawCard = cards => {
        let gridCards = document.getElementById('section');
        console.log(gridCards);
        cards.forEach(card => {
            gridCards.append(new Card(card.title, card.id, card.hex).getCard());
        });
    };

    generateRandomColor = () => {
        let colorHex = []

        for (let i = 0; i < 20; i++) {
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal;
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);
            colorHex.push(`${randColor.toUpperCase()}`)
        }
        return colorHex
    }

    fetching = () => {
        let url = "https://jsonplaceholder.typicode.com/photos";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let cardsData = data.splice(0, 20)
                let hex = this.generateRandomColor()
                for (let i = 0; i < cardsData.length; i++) {
                    cardsData[i]['hex'] = hex[i];
                }
                console.log(cardsData);
                this.drawCard(cardsData);
            })
            .catch(err => { console.log(err) });


    }
}

const list = new AllData();
list.fetching();


// window.addEventListener('scroll' ,() =>{
//     let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     let scrolled = window.scrollY ;
//     if(Math.ceil(scrolled) === maxScroll){

//     }

// })
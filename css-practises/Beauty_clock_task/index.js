'use strict';

class Hand{
    constructor(){
        this.clock = document.createElement('div');
        this.clock.setAttribute('class','hands-cont')
        let data = ["hands secHand","hands minHand","hands hourHand","center"]
        for(let i =0;i<4 ; i++){
            let element = document.createElement('div')
            element.setAttribute('class',`${data[i]}`)
            this.clock.appendChild(element);
        }

        
    }
    
    get getClock (){
        return this.clock
    }
    
    time = () =>{
        setTimeout(this.setClock);
        setInterval(this.setClock,1000)
    }

    setClock = ()=>{
        let secHand = document.getElementsByClassName('hands secHand')[0];
        let minHand = document.getElementsByClassName('hands minHand')[0];
        let hourHand = document.getElementsByClassName('hands hourHand')[0];

        let date = new Date()
        let secRatio = date.getSeconds()/60;
        let minRatio = (secRatio + date.getMinutes())/60 ;
        let hourRatio =  (minRatio + date.getHours() - 0.5) /12 ;

        secHand.style.setProperty('--rotation', secRatio * 360);
        minHand.style.setProperty('--rotation', minRatio * 360);
        hourHand.style.setProperty('--rotation', hourRatio * 360); 
    }
    
}


class Clock{

    constructor(){
        let body = document.getElementsByTagName('body')[0];
        let container = document.createElement('div');
        let clock = document.createElement('div');

        let num = 3;
        for(let i = 0; i < 4;i++){
            let number = document.createElement('div');
            number.setAttribute('class',`numbers number-${num}`);
            number.innerText = `${num}`;
            clock.appendChild(number);
            num += 3
        } 

        container.setAttribute('class','container');
        clock.setAttribute('class','clock');

        container.appendChild(clock);
        body.appendChild(container);

    }


    clockData = () => {
        let clock = document.getElementsByClassName('clock')[0];
        let hands = new Hand();
        clock.append(hands.getClock);
        hands.time()
    
    }

}

let clock = new Clock()
clock.clockData();

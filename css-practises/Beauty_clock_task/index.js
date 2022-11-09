'use strict';

class CurrentTime{

    constructor(){
        let date = new Date()
        this.secRatio = date.getSeconds()/60;
        this.minRatio = (date.getMinutes())/60 ;
        this.hourRatio =  (this.minRatio + date.getHours()- 0.05) /12 ;
    }

    get currentTime(){
        return {'secRatio':this.secRatio, 'minRatio':this.minRatio, 'hourRatio':this.hourRatio}
    }



}


class Hand{

    constructor(){
        this.handContainer = document.createElement('div');
        this.handContainer.setAttribute('class','hand-container')

        let data = ["hand secHand","hand minHand","hand hourHand","center"]

        for(let i =0;i < data.length ; i++){
            let element = document.createElement('div')
            element.setAttribute('class', data[i])
            this.handContainer.appendChild(element);
        }
        
    }

    get hand (){
        return this.handContainer
    }
    
    time = () =>{
        setTimeout(this.setCurrentTime);
        setInterval(this.setCurrentTime,1000)
    }

    setCurrentTime = ()=>{
        let currentTime = new CurrentTime().currentTime

        let secHand = document.getElementsByClassName('secHand')[0];
        let minHand = document.getElementsByClassName('minHand')[0];
        let hourHand = document.getElementsByClassName('hourHand')[0];

        secHand.style.setProperty('--rotation', currentTime.secRatio * 360);
        minHand.style.setProperty('--rotation', currentTime.minRatio * 360);
        hourHand.style.setProperty('--rotation', currentTime.hourRatio * 360); 
    }

}

class Clock{

    constructor(){
        let body = document.getElementsByTagName('body')[0];
        let clockContainer = document.createElement('div');
        let clock = document.createElement('div');
        clockContainer.setAttribute('class','clockContainer');
        clock.setAttribute('class','clock');

        let num =[
            {
                element : 'div' , class:"number number-3",text:'3'
            },{
                element : 'div' , class:"number number-6",text:'6'
            },{
                element : 'div' , class:"number number-9",text:'9'
            },{
                element : 'div' , class:"number number-12",text:'12'
            }
        ];

        for(let i = 0; i < num.length;i++){
            let number = document.createElement(`${num[i].element}`);
            number.setAttribute('class',num[i].class);
            number.innerText = num[i].text;
            clock.appendChild(number);
        } 

        clockContainer.appendChild(clock);
        body.appendChild(clockContainer);

    }


    clockData = () => {
        let clock = document.getElementsByClassName('clock')[0];
        let hand = new Hand()
        hand.time()
        clock.append(hand.hand);
    
    }

}

let clock = new Clock()
clock.clockData();

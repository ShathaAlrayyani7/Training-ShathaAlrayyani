'use strict';
class Hand{
    constructor(){
        this.clock = document.createElement('div');
        let secHand = document.createElement('div');
        let minHand = document.createElement('div');
        let hourHand = document.createElement('div');
        let center = document.createElement('div');
        
        secHand.setAttribute('class','hands');
        secHand.setAttribute('id','secHand');
        secHand.style.width = '3px';
        secHand.style.backgroundColor = 'red';
        
        minHand.setAttribute('class','hands');
        minHand.setAttribute('id','minHand');
        minHand.style.width = '7px';

        
        hourHand.setAttribute('class','hands');
        hourHand.setAttribute('id','hourHand');
        hourHand.style.height = '110px'

        center.setAttribute('id','center');
        center.setAttribute('class','center');

        this.clock.appendChild(secHand);
        this.clock.appendChild(minHand);
        this.clock.appendChild(hourHand);
        this.clock.appendChild(center);
        
    }
    
    getClock = () =>{
        return this.clock
    }
    
    time = () =>{
        setInterval(this.setClock,1000)
    }

    setClock = ()=>{
        let secHand = document.getElementById('secHand');
        let minHand = document.getElementById('minHand');
        let hourHand = document.getElementById('hourHand');

        let date = new Date()
        let secRatio = date.getSeconds()/60;
        let minRatio = (secRatio + date.getMinutes())/60;
        let hourRatio =  (minRatio + date.getHours())/12;

        secHand.style.setProperty('--rotation', secRatio * 360);
        minHand.style.setProperty('--rotation', minRatio * 360);
        hourHand.style.setProperty('--rotation', hourRatio * 360);

        
    }
    


}
class ClockNum{
    constructor(){
        let body = document.getElementsByTagName('body')[0];
        let container = document.createElement('div');
        let clock = document.createElement('div');
        let num = 3;
        let theta = 90
        for(let i = 0; i < 4;i++){
            let number = document.createElement('div');
            number.setAttribute('id',`number-${num}`);
            number.setAttribute('class','numbers');
            number.innerText = `${num}`;
            clock.appendChild(number);
            num += 3
            theta += 90;
        } 

        container.setAttribute('class','container');
        clock.setAttribute('class','clock');
        clock.setAttribute('id','clock');

        container.appendChild(clock);
        body.appendChild(container);

    }


    clockData = () => {
        let clock = document.getElementById('clock');
        let hands = new Hand();
        clock.append(hands.getClock());
        hands.time()
        
        console.log(clock);
    }

}

let clock = new ClockNum()
clock.clockData();

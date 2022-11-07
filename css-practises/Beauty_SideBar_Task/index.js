"use strict"

class SideBar{
    constructor(url,img){
        this.nav = document.createElement('a');
        let icon = document.createElement('img');

        this.nav.setAttribute('class','nav');
        this.nav.setAttribute('href',`${url}`)
        icon.setAttribute('class','icons');
        icon.setAttribute('src',`${img}`)
        
        this.nav.appendChild(icon);
        console.log(this.nav);
        
        
    }
    
    get nav () {
        return this.nav
    }
    
}

class Container{
    constructor(){
        let url = 'https://4kwallpapers.com/images/wallpapers/naruto-digital-art-black-background-amoled-3840x2160-5056.png'
        let body = document.getElementsByTagName('body')[0];
        let container = document.createElement('div');
        let section = document.createElement('div');
        let background = document.createElement('img');
        let sideBar = document.createElement('div');
        
        container.setAttribute('class','container');
        section.setAttribute('class','section');
        sideBar.setAttribute('id','sideBar');
        sideBar.setAttribute('class','sideBar');
        background.setAttribute('class','backgroundImg');
        background.setAttribute('src',url);
        background.setAttribute('alt','Background Image');
        sideBar.addEventListener('mouseover', this.showSideBar)
        background.addEventListener('mouseover', this.hideSideBar)

        
        section.appendChild(background);
        container.appendChild(section);
        container.appendChild(sideBar);
        body.appendChild(container);
        
    }
    
    showSideBar = ()=> {
        console.log('hi');
        let sideBar = document.getElementById('sideBar')
        sideBar.style.transition = "0.5s";
        sideBar.style.width = "130px";
        sideBar.style.background = 'lightblue'
        sideBar.style.whiteSpace = 'wrap'
    }
    
    hideSideBar = () =>{
        console.log('done');
        let sideBar = document.getElementById('sideBar')
        sideBar.style.overflowX = "hidden";
        sideBar.style.transition = "0.5s";
        sideBar.style.width = "0px";
        sideBar.style.whiteSpace = 'nowrap';
        sideBar.style.background = 'rgb(4, 3, 16)'

    }
    
    renderData = () => {
        let data = [
            {
                "title":"Home", "url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-naruto-sign-100.png"
            },{
                "title":"Add", "url":"https://en.wikipedia.org/wiki/Naruto","img":"./assets/icons8-plus-100.png"
            },{
                "title":"Find", "url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-folder-100.png"
            },{
                "title":"My Contact", "url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-myspace-100.png"
            },{
                "title":"Support","url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-support-100.png"
            },{ 
                "title":"About Us", "url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-info-100.png"
            },{
                "title":"Settings", "url":"https://en.wikipedia.org/wiki/Naruto", "img":"./assets/icons8-settings-100.png"
            }
            
        ]
        let sideBar = document.getElementById('sideBar');
        for(let i = 0 ; i < data.length ; i++){

            sideBar.append(new SideBar(data[i].url, data[i].img).getNav());
        }

        } 
}


let web = new Container()
web.renderData();





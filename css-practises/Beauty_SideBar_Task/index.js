"use strict"

class NavItem{
    constructor(url,img){
        this.nav = document.createElement('a');
        let icon = document.createElement('img');
        this.nav.setAttribute('class', 'nav');
        this.nav.setAttribute('href', `${url}`)
        icon.setAttribute('class', 'icons');
        icon.setAttribute('src', `${img}`)
        this.nav.appendChild(icon);
    }
    
    get getNav() {
        return this.nav
    }
    
}


class SideBar {
    constructor() {
        this.sideBar = document.createElement('div');
        this.sideBar.setAttribute('class', 'sideBar');
        
        let data = [
            {
                title: "Home", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-naruto-sign-100.png"
            }, {
                title: "Add", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-plus-100.png"
            }, {
                title: "Find", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-folder-100.png"
            }, {
                title: "My Contact", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-myspace-100.png"
            }, {
                title: "Support", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-support-100.png"
            }, {
                title: "About Us", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-info-100.png"
            }, {
                title: "Settings", url: "https://en.wikipedia.org/wiki/Naruto", img: "./assets/icons8-settings-100.png"
            }
        ]
        
        for (let i = 0; i < data.length; i++) {
            this.sideBar.append(new NavItem(data[i].url, data[i].img).getNav);
        }

    }
    
    get getSideBar(){
        return this.sideBar
    }
    
}


class ImgContainer {
    constructor() {
        let url = 'https://4kwallpapers.com/images/wallpapers/naruto-digital-art-black-background-amoled-3840x2160-5056.png'
        this.section = document.createElement('div');
        let background = document.createElement('img');
        this.section.setAttribute('class', 'section');
        background.setAttribute('class', 'backgroundImg');
        background.setAttribute('src', url);
        background.setAttribute('alt', 'Background Image');
        
        this.section.appendChild(background);
        
    }
    
    get getImgContainer(){
        return this.section
    }
    
}

class Page{
    
    constructor(){
        let body = document.getElementsByTagName('body')[0];
        let container = document.createElement('div');
        
        container.setAttribute('class', 'container');
        container.addEventListener('mousemove', this.showSideBar);
        body.appendChild(container);
    }

    renderPage = () => {
        let sideBar = new SideBar().getSideBar;
        let imgContainer = new ImgContainer().getImgContainer
        let container = document.getElementsByClassName('container')[0];
        container.appendChild(sideBar);
        container.appendChild(imgContainer);
    }
    
    showSideBar = (event) => {
        let sideBar = document.getElementsByClassName('sideBar')[0];
        const classList = Object.values(sideBar.classList ?? {});
        const clientX = event
        const x = document.documentElement.clientWidth
        let percentage = (x * 10)/100 
        let width = x - percentage
        
        if(clientX.clientX > width){
            sideBar.classList.add('show')
        }
        
        else{
            sideBar.classList.remove('show')
        }
    }

}

let page = new Page()
page.renderPage();





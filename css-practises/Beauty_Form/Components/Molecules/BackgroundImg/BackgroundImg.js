'use strict';

export default class BackgroundImg{
    #url = 'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg';
    #altUrl = 'https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg';
    #backgroundImg
    constructor(type , url=this.#url){

        this.#backgroundImg = document.createElement('div');
        let background = document.createElement('img');
        this.#backgroundImg.setAttribute('class', `Background ${type}`);

        background.setAttribute('class', `backgroundImg ${type}`);
        background.setAttribute('src', url);
        background.setAttribute('onerror',this.handleImageError);
        background.setAttribute('alt', 'Background Image');

        this.#backgroundImg.appendChild(background)
    }

    get backgroundImg(){
        return this.#backgroundImg
    }

    handleImageError(){
        this.src = this.#altUrl
    }


}
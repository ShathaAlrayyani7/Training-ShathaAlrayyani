'use strict';

export default class ImgContainer{
    #url = 'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg';
    #altUrl = 'https://images.hdqwalls.com/wallpapers/hatake-kakashi-naruto-anime-q5.jpg';
    #imgContainer
    constructor(){

        this.#imgContainer = document.createElement('div');
        let background = document.createElement('img');
        this.#imgContainer.setAttribute('class', 'imgContainer');

        background.setAttribute('class', 'backgroundImg');
        background.setAttribute('src', this.#url);
        background.setAttribute('onerror',`this.onerror= null,this.src=${this.#altUrl}`);
        background.setAttribute('alt', 'Background Image');

        this.#imgContainer.appendChild(background)
    }

    get imgContainer(){
        return this.#imgContainer
    }


}
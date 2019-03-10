import { environment } from './environment';

export default class Gallery {
    init() {
        console.log('Gallery loaded.');
        
        if(document.querySelector('.home')) {
            this.generateGallery();
        }

        if(document.querySelector('.random')) {
            this.generateRandomPhoto();
        }
    }
    
    getPhotos() {
        return fetch(`https://api.unsplash.com/photos/?client_id=${environment.ACCES_KEY}&per_page=20`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
    }

    getRandomPhoto() {
       return fetch(`https://api.unsplash.com/photos/random/?client_id=${environment.ACCES_KEY}`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
    }
    
    generateGallery() {
        const gallery = document.querySelector('.gallery');

        this.getPhotos()
            .then(data => {
                data.forEach(photo => {
                    gallery.innerHTML += `
                        <a href="${photo.urls.full}" class="gallery__item">
                            <img src="${photo.urls.small}">
                        </a>
                   `;
                });
            })
    }

    generateRandomPhoto() {
        const randomContainer = document.querySelector('.random');

        this.getRandomPhoto()
            .then(photo => {
                randomContainer.innerHTML += `
                    <a href="${photo.urls.full}" class="gallery__item">
                        <img src="${photo.urls.regular}">
                    </a>
                `;
            })
    }
}
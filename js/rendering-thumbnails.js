import {createPhotoContainer} from './create-photo-container.js'
 
const photoContainer = Array.from({length: 25}, () => createPhotoContainer());
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imagesOtherUsersConteiner = document.querySelector('.pictures');

const renderingThimbnails = () => {
    photoContainer.forEach(element => {
        const clonePictureTemplate = pictureTemplate.cloneNode(true);
        clonePictureTemplate.children[0].src = element.url;
        clonePictureTemplate.children[1].querySelector('.picture__comments').textContent = element.comments.length;
        clonePictureTemplate.children[1].querySelector('.picture__likes').textContent = element.likes;
        imagesOtherUsersConteiner.appendChild(clonePictureTemplate);
    });
};

export{renderingThimbnails, photoContainer}
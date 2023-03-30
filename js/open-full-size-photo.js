import {printComments} from './output-of-comments.js';
import {photoContainer} from './rendering-thumbnails.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureInfo = document.querySelector('.big-picture__social');
const descriptionAvatar = bigPictureInfo.querySelector('img');
const likes = bigPictureInfo.querySelector('.social__likes .likes-count');
const commentsContainer = document.querySelector('.social__comments');
const commentsCapture = document.querySelector('.social__caption');
const bigPictureImg = document.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const loadCommentButton = document.querySelector('.social__comments-loader');
const body = document.querySelector('body')
let photoIndex = 0;

const openFullSizePhoto = () => {
    const pictureImgCollection = document.querySelectorAll('.picture__img');
    pictureImgCollection.forEach((element, index) => {
        element.addEventListener('click', () =>{
            bigPictureContainer.classList.remove('hidden');
            document.querySelector('body').classList.add('modal-open');
            bigPictureImg.src = element.src;
            likes.textContent = element.parentNode.querySelector('.picture__info .picture__likes').textContent;
            descriptionAvatar.src = `img/avatar-${photoContainer[index].userIds}.svg`;
            commentsCapture.textContent = photoContainer[index].description;
            photoIndex = index;
            printComments(index, 5);
        })
    })
  
    loadCommentButton.addEventListener ('click', () => {
        printComments(photoIndex, 5)
    })

    closeButton.addEventListener('click', () => {
        bigPictureContainer.classList.add('hidden')
        document.querySelector('body').classList.remove('modal-open');
        commentsContainer.querySelectorAll('li').forEach((n) => {
            n.remove();
        });
    });
};

export {openFullSizePhoto}
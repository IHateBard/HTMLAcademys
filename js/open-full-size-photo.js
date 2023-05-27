import { printComments } from './output-of-comments.js';
import { getRandomPositiveInteger } from './generate-number.js';

const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureInfo = document.querySelector('.big-picture__social');
const descriptionAvatar = bigPictureInfo.querySelector('img');
const likes = bigPictureInfo.querySelector('.social__likes .likes-count');
const commentsContainer = document.querySelector('.social__comments');
const commentsCapture = document.querySelector('.social__caption');
const bigPictureImg = document.querySelector('.big-picture__img img');
const closeButton = document.querySelector('.big-picture__cancel');
const loadCommentButton = document.querySelector('.social__comments-loader');
const commentsCount = document.querySelector('.social__comment-count');
const body = document.querySelector('body');

let index = 0;
let previousIndex = 0;
let photoIndex = 0;
let totalCommentCount = 0;
let currentContainer;

const checkCommentsCount = () => {
  commentsCount.textContent = `${commentsContainer.children.length} из ${totalCommentCount} комментариев`;
  if (commentsContainer.children.length >= totalCommentCount) {
    loadCommentButton.style.display = 'none';
  }
};

const printNewComments = (id, container) => {
  if (commentsContainer.children.length < totalCommentCount) {
    previousIndex = index;
    index += 5;
    printComments(id, index, previousIndex, container);
    loadCommentButton.style.display = '';
  }
};

const openFullSizePhoto = (container) => {
  currentContainer = container;
  const pictureImgCollection = document.querySelectorAll('.picture__img');
  pictureImgCollection.forEach((element, id) => {
    element.addEventListener('click', () => {
      bigPictureContainer.classList.remove('hidden');
      body.classList.add('modal-open');
      bigPictureImg.src = element.src;
      likes.textContent = element.parentNode.querySelector(
        '.picture__info .picture__likes',
      ).textContent;
      descriptionAvatar.src = `img/avatar-${getRandomPositiveInteger(
        1,
        6,
      )}.svg`;
      commentsCapture.textContent = container[id].description;
      totalCommentCount = container[id].comments.length;
      printNewComments(id, container);
      checkCommentsCount(id);
      photoIndex = id;
      index = commentsContainer.children.length;
      console.log(previousIndex);
      previousIndex = index;
    });
  });

  loadCommentButton.addEventListener('click', () => {
    printNewComments(photoIndex, currentContainer);
    checkCommentsCount(photoIndex);
  });

  closeButton.addEventListener('click', () => {
    bigPictureContainer.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    commentsContainer.querySelectorAll('li').forEach((n) => {
      n.remove();
    });
    index = 0;
    previousIndex = 0;
    photoIndex = 0;
    totalCommentCount = 0;
  });
};

export { openFullSizePhoto };

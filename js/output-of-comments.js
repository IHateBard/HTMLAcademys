import {photoContainer} from './rendering-thumbnails.js';

const commentsContainer = document.querySelector('.social__comments');


const fragment = document.createDocumentFragment();

const printComments = (index, quantity) => {
    for (let i = 0; i < quantity; i++) {
    const newElement = document.createElement('li');
    const lastElement = photoContainer[index].comments.length - 1;

    newElement.classList.add('social__comment');
    newElement.innerHTML = '<img class="social__picture" width="35" height="35">' + '<p class="social__text">';
    newElement.querySelector('img').src = photoContainer[index].comments[lastElement - i].avatar;
    newElement.querySelector('p').textContent = photoContainer[index].comments[lastElement - i].message;
    fragment.appendChild(newElement);
    commentsContainer.appendChild(fragment);
}
};

export {printComments};
import { openFullSizePhoto } from './open-full-size-photo.js';

let photoContainer = [];
let randomPhotoContainer = [];
let uniqueId = [];
let mostDiscousContainer = [];
const RERENDER_DELAY = 500;
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const imgFilter = document.querySelector('.img-filters');
const imagesOtherUsersConteiner = document.querySelector('.pictures');
const buttonFilterDefault = document.getElementById('filter-default');
const buttonFilterRandom = document.getElementById('filter-random');
const buttonFilterDiscussed = document.getElementById('filter-discussed');

const fillPhotoContainer = (container) => {
  container.forEach((element) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.children[0].src = element.url;
    clonePictureTemplate.children[1].querySelector(
      '.picture__comments',
    ).textContent = element.comments.length;
    clonePictureTemplate.children[1].querySelector(
      '.picture__likes',
    ).textContent = element.likes;
    imagesOtherUsersConteiner.appendChild(clonePictureTemplate);
  });
  openFullSizePhoto(container);
};

const activeButton = (id) => {
  document
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  document.getElementById(id).classList.add('img-filters__button--active');
};

const renderingThimbnails = _.debounce(() => {
  activeButton('filter-default');
  removeChildElement();
  fillPhotoContainer(photoContainer);
}, 500);

const fetchData = (onError) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      photoContainer = data;
      imgFilter.classList = 'img-filters img-filters--active container';
      renderingThimbnails();
    })
    .catch((err) => {
      imgFilter.classList = 'img-filters img-filters--inactive container';
      onError(err);
    });
};

fetchData(console.error);

const removeChildElement = () => {
  const allImagesOtherUsersConteiner = document.querySelectorAll('.pictures a');
  allImagesOtherUsersConteiner.forEach((element) => {
    imagesOtherUsersConteiner.removeChild(element);
  });
};

const renderingRandomThimbnails = _.debounce(() => {
  removeChildElement();
  activeButton('filter-random');
  uniqueId = [];
  randomPhotoContainer = [];
  for (let i = uniqueId.length; i < 10; i = uniqueId.length) {
    uniqueId.push(_.random(0, 24));
    uniqueId = _.uniq(uniqueId);
  }
  uniqueId.forEach((element) => {
    randomPhotoContainer.push(photoContainer[element]);
  });
  fillPhotoContainer(randomPhotoContainer);
}, 500);

const renderingMostDiscousThimbnails = _.debounce(() => {
  removeChildElement();
  activeButton('filter-discussed');
  mostDiscousContainer = [];
  mostDiscousContainer = photoContainer
    .slice()
    .sort((currentElement, nextElement) => {
      return nextElement.comments.length - currentElement.comments.length;
    });
  fillPhotoContainer(mostDiscousContainer);
}, 500);

buttonFilterDefault.addEventListener('click', renderingThimbnails);
buttonFilterRandom.addEventListener('click', renderingRandomThimbnails);
buttonFilterDiscussed.addEventListener('click', renderingMostDiscousThimbnails);

export { renderingThimbnails, photoContainer };

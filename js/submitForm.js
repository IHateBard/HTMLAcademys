import { onCancelButtonClick } from './upload-photo.js';
import { pristine } from './validation.js';
const sucessMessageTemplate = document
  .getElementById('success')
  .content.querySelector('.success');
const sucessErrMessageTemplate = document
  .getElementById('error')
  .content.querySelector('.error');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const zoomValueDefault = document.querySelector('.scale__control--value');
const defaultEffect = document.getElementById('effect-none');
const uploadImg = document.querySelector('.img-upload__preview img');
const img = document.querySelector('.img-upload__preview');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const formReset = () => {
  hashtagField.value = '';
  commentField.value = '';
  img.style.filter = '';
  img.setAttribute('class', 'img-upload__preview effects__preview--none');
  uploadImg.setAttribute('style', '');
  zoomValueDefault.value = '100%';
  defaultEffect.nextElementSibling.click();
};

const showSucessModal = () => {
  body.appendChild(sucessMessageTemplate);
  const cloneModalMessage = document.querySelector('.success__button');
  cloneModalMessage.addEventListener('click', () => {
    const message = document.querySelector('.success');
    message.remove();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const message = document.querySelector('.success');
      message.remove();
    }
  });
};

const showErrSucessModal = () => {
  body.appendChild(sucessErrMessageTemplate);
  const cloneErrModalMessage = document.querySelector('.error__button');
  cloneErrModalMessage.addEventListener('click', () => {
    const message = document.querySelector('.error');
    message.remove();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const errMessage = document.querySelector('.error');
      errMessage.remove();
    }
  });
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isvalid = pristine.validate();
  if (isvalid) {
    const formData = new FormData(evt.target);
    console.log(new FormData(evt.target));
    fetch('https://25.javascript.pages.academy/kekstagram', {
      method: 'POST',
      contentType: 'multipart/form-data',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          formReset();
          onCancelButtonClick();
          showSucessModal();
          return;
        }
        throw new Error(`${response.status} ${response.statusText}`);
      })
      .catch((err) => {
        showErrSucessModal();
        onCancelButtonClick();
        console.log(err);
      });
  }
  return false;
};

form.addEventListener('submit', onFormSubmit);

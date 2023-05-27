import { pristine } from './validation.js';
const fileChooser = document.querySelector('.img-upload__input');
const uploadImg = document.querySelector('.img-upload__preview img');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const onCancelButtonClick = () => {
  hideModal();
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onFileInputChange = () => {
  const file = fileChooser.files[0];
  uploadImg.src = URL.createObjectURL(file);
  showModal();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export { onCancelButtonClick };

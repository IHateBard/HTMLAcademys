import {getEditingForm, closeEditingForm} from './open-close-edit-form.js'
import {checkLength} from './check-length.js'
import {renderingThimbnails} from './rendering-thumbnails.js'
import {openFullSizePhoto} from './open-full-size-photo.js';

//Открываем форму редактирования
getEditingForm();

//Закрываем форму редактирования
closeEditingForm();

// Проверка на длину комментария
const uploadComment = document.querySelector('.text__description');
checkLength(uploadComment, 140);

// Отрисовка миниатюр фото
renderingThimbnails();
// Открытие фото
openFullSizePhoto();
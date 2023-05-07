import {minLengthStringCheck} from './util.js';
import {MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from './data.js';
import {createInfoInput} from './server.js';
import {closeWindow, activateButton, disableButton} from './upload-window.js';
import {openErrorMessage, openSuccessMessage} from './messages.js';

document.querySelector('.text__description').setAttribute('maxlength', MAX_COMMENT_LENGTH);
const orderForm = document.querySelector('.img-upload__form');
const commentWrappers = document.querySelectorAll('.img-upload__field-wrapper');

//валидатор Pristine
const pristine = new Pristine(orderForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateCommentMin = (value) => minLengthStringCheck(value, MIN_COMMENT_LENGTH);

pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateCommentMin,
  `Длина комментария не может быть меньше ${MIN_COMMENT_LENGTH} символов`);

//Обработка различных ошибок
const removeErrorMessage = () => {
  if (commentWrappers[1].children.length > 1){
    document.querySelector('.errorMessage').remove();
  }
};

const addMessage = (data, color) => {
  if (commentWrappers[1].children.length <= 1){
    const textError = document.createElement('p');
    textError.textContent = data;
    commentWrappers[1].appendChild(textError);
    textError.className = 'errorMessage';
    textError.style.color = color;
  }
};

const uploadSuccess = () => {
  closeWindow();
  openSuccessMessage();
};

const uploadError = () => {
  closeWindow();
  openErrorMessage();
};

orderForm.addEventListener('submit', (evt) => {
  removeErrorMessage();
  if (!pristine.validate()) {
    evt.preventDefault();
    addMessage(`Длина комментария не может быть меньше ${MIN_COMMENT_LENGTH} символов`, 'red');
  } else {
    evt.preventDefault();
    disableButton();
    const formData = new FormData(evt.target);
    const createInput = createInfoInput(uploadSuccess,uploadError,formData);
    createInput();
    activateButton();
  }
});
export {removeErrorMessage};

import {maxLengthStringCheck, minLengthStringCheck} from './util.js';

const orderForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(orderForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateCommentMin (value) {
  return minLengthStringCheck(value, 20);
}

function validateCommentMax (value) {
  return maxLengthStringCheck(value, 140);
}

pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateCommentMin,
  'длина комментария не может быть меньше 20 символов');
pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateCommentMax,
  'длина комментария не может составлять больше 140 символов');

orderForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

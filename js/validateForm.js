import {maxLengthStringCheck, minLengthStringCheck} from './util.js';

const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
document.querySelector('.text__description').setAttribute('maxlength', MAX_COMMENT_LENGTH);
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
  return minLengthStringCheck(value, MIN_COMMENT_LENGTH);
}

function validateCommentMax (value) {
  return maxLengthStringCheck(value, MAX_COMMENT_LENGTH);
}

pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateCommentMin,
  ['длина комментария не может быть меньше ', MIN_COMMENT_LENGTH, ' символов'].join(''));
pristine.addValidator(
  orderForm.querySelector('.text__description'),
  validateCommentMax,
  ['длина комментария не может составлять больше ', MAX_COMMENT_LENGTH, ' символов'].join(''));

orderForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


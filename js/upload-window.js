import {removeErrorMessage} from './validate-form.js';

//Открытие, закрытие окна редактирования фото
const openButton = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const uploadWindow = document.querySelector('.img-upload__overlay');
//Хэштег и коммент под фото
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
//Редактирование масщтаба изображения
const scaleValueText = document.querySelector('.scale__control--value');
const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
//Редактирование эффекта на изображение
const buttonsOfEffectsList = document.querySelectorAll('.effects__radio');
//Слайдер
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelInput = document.querySelector('.effect-level__value');
//Картинка
const imageElement = document.querySelector('.img-upload__preview');
//Кнопка отправки данных
const submitButton = document.querySelector('.img-upload__submit');

let scaleValue = 100;
let effectValue = 100;
let currentEffectId = 0;
effectLevelInput.value = effectValue;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});
sliderElement.classList.add('hidden');

const rescaleImage = () => {
  scaleValueText.value = `${scaleValue}%`;
  imageElement.style.transform = `scale(${scaleValue/100})`;
};

const showSlider = () => {
  sliderElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderElement.classList.add('hidden');
};

const clearWindow = () => {
  openButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
  scaleValueText.value = '100%';
  imageElement.style = '';
  scaleValue = 100;
  effectValue = 100;
  currentEffectId = 0;
  effectLevelInput.value = effectValue;
  hideSlider();
};

const closeWindow = () => {
  uploadWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeErrorMessage();
  clearWindow();
};

const disableButton = () => {
  submitButton.disabled = true;
};

const activateButton = () => {
  submitButton.disabled = false;
};

//Кнопки открытия и закрытия окна редактирования фото
openButton.addEventListener ('change', () => {
  uploadWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeWindow();
    }
  }, {once:true}
  );

}
);

closeButton.addEventListener ('click', () => {
  closeWindow();
});

//Кнопки редактирования масштаба изображения
scaleButtonSmaller.addEventListener('click', () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
  }
  rescaleImage();
});

scaleButtonBigger.addEventListener('click', () => {
  if (scaleValue < 100) {
    scaleValue += 25;
  }
  rescaleImage();
});

//Кнопки редактирование эффекта на изображение
//Эффект Оригинал
buttonsOfEffectsList[0].addEventListener('click', () => {
  hideSlider();
  currentEffectId = 0;
  imageElement.style.filter = '';
});

//Эффект Хром
buttonsOfEffectsList[1].addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step:0.1,
  });
  showSlider();
  currentEffectId = 1;
  imageElement.style.filter = 'grayscale(1)';
});

//Эффект Сепия
buttonsOfEffectsList[2].addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step:0.1,
  });
  showSlider();
  currentEffectId = 2;
  imageElement.style.filter = 'sepia(1)';
});

//Эффект Марвин
buttonsOfEffectsList[3].addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step:1,
  });
  showSlider();
  currentEffectId = 3;
  imageElement.style.filter = 'invert(100%)';
});

//Эффект Фобос
buttonsOfEffectsList[4].addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step:0.1,
  });
  showSlider();
  currentEffectId = 4;
  imageElement.style.filter = 'blur(3px)';
});

//Эффект Зной
buttonsOfEffectsList[5].addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step:0.1,
  });
  showSlider();
  currentEffectId = 5;
  imageElement.style.filter = 'brightness(3)';
});

sliderElement.noUiSlider.on('update', () => {
  effectValue = sliderElement.noUiSlider.get();
  effectLevelInput.value = effectValue;
  switch (currentEffectId) {
    case 1:
      imageElement.style.filter = `grayscale(${effectValue})`;
      break;
    case 2:
      imageElement.style.filter = `sepia(${effectValue})`;
      break;
    case 3:
      imageElement.style.filter = `invert(${effectValue}%)`;
      break;
    case 4:
      imageElement.style.filter = `blur(${effectValue}px)`;
      break;
    case 5:
      imageElement.style.filter = `brightness(${effectValue})`;
      break;
  }
});

export {closeWindow, activateButton, disableButton};

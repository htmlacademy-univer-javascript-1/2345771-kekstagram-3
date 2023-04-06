import {photos} from './data.js';

const photoTemplate = document.querySelector('#picture');
const photoFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

//Отрисовка фотографий по шаблону
const renderPhotos = () => {
  for (const photo of photos) {
    const newPhoto = photoTemplate.cloneNode(true);
    newPhoto.content.querySelector('.picture__img').src = photo.url;
    newPhoto.content.querySelector('.picture__likes').textContent = photo.likes;
    newPhoto.content.querySelector('.picture__comments').textContent = photo.comments;
    photoFragment.appendChild(newPhoto);
  }
  picturesContainer.appendChild(photoFragment);
};

export {renderPhotos};

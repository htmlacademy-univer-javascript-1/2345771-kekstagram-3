import {photos} from './data.js';

const photosTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

//Отрисовка фотографий по шаблону
const renderPhotos = () => {
  const photoFragment = document.createDocumentFragment();
  for (const photo of photos) {
    const newPhoto = photosTemplate.cloneNode(true);
    newPhoto.querySelector('.picture__img').src = photo.url;
    newPhoto.querySelector('.picture__likes').textContent = photo.likes;
    newPhoto.querySelector('.picture__comments').textContent = photo.comments;
    photoFragment.appendChild(newPhoto);
  }
  picturesContainer.appendChild(photoFragment);
};

export {renderPhotos};

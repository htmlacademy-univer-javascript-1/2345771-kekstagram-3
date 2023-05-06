//import {photos} from './data.js';
import {createLoaderPhotos} from './server.js';

const photosTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

let photos;

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

const createPhotos = (data) => {
  photos = data;
  renderPhotos();
};

const showError = (data) => {
  const textError = document.createElement('p');
  textError.textContent = data;
  picturesContainer.appendChild(textError);
  textError.className = 'errorMessage';
  textError.style.color = 'red';
};

const loadPhotos = createLoaderPhotos(createPhotos,showError);

export {renderPhotos,loadPhotos};

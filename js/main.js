import {createSuccessMessage, createErrorMessage} from './errorSuccesMessage.js';
import {loadPhotos} from './render.js';
import './uploadWindow.js';
import './validateForm.js';
import './photoUpload.js';

createSuccessMessage();
createErrorMessage();
loadPhotos();

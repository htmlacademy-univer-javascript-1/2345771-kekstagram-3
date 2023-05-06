import {loadPhotos} from './render.js';
import './uploadWindow.js';
import './validateForm.js';
import {createSuccessMessage, createErrorMessage} from './errorSuccesMessage.js';

createSuccessMessage();
createErrorMessage();
loadPhotos();

import {createSuccessMessage, createErrorMessage} from './messages.js';
import {loadPhotos} from './render.js';
import './upload-window.js';
import './validate-form.js';
import './photo-upload.js';

createSuccessMessage();
createErrorMessage();
loadPhotos();

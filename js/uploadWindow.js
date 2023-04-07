const openButton = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const uploadWindow = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

function closeWindow() {
  uploadWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  openButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

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

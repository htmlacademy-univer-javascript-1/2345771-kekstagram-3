const errorTemplate = document.querySelector('#error').content;
const succesTemplate = document.querySelector('#success').content;

const openErrorMessage = () => {
  const currentErrorMessage = document.querySelector('.error');
  const innerErrorMessage = document.querySelector('.error__inner');
  currentErrorMessage.classList.remove('hidden');
  document.querySelector('.error__button').addEventListener('click', () => {
    currentErrorMessage.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      currentErrorMessage.classList.add('hidden');
    }
  });

  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(innerErrorMessage);
    if ( ! withinBoundaries ) {
      currentErrorMessage.classList.add('hidden');
    }
  });
};

const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);
  const currentErrorMessage = document.querySelector('.error');
  currentErrorMessage.classList.add('hidden');
};

const openSuccessMessage = () => {
  const currentSuccessMessage = document.querySelector('.success');
  const innerSuccessMessage = document.querySelector('.success__inner');
  currentSuccessMessage.classList.remove('hidden');
  document.querySelector('.success__button').addEventListener('click', () => {
    currentSuccessMessage.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      currentSuccessMessage.classList.add('hidden');
    }
  });

  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(innerSuccessMessage);
    if ( ! withinBoundaries ) {
      currentSuccessMessage.classList.add('hidden');
    }
  });
};

const createSuccessMessage = () => {
  const succesMessage = succesTemplate.cloneNode(true);
  document.body.appendChild(succesMessage);
  const currentSuccesMessage = document.querySelector('.success');
  currentSuccesMessage.classList.add('hidden');
};

export {createErrorMessage, createSuccessMessage, openErrorMessage, openSuccessMessage};

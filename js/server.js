const createLoaderPhotos = (onSuccess, onError) => () => fetch(
  'https://27.javascript.pages.academy/kekstagram-simple/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

const createInfoInput = (onSuccess, onError, post) => () => fetch(
  'https://27.javascript.pages.academy/kekstagram-simple',
  {
    method: 'POST',
    body: post,
  },)
  .then((response) => {
    if (response.ok) {
      onSuccess(response);
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
  .catch((err) => {
    onError(err);
  });

export {createLoaderPhotos, createInfoInput};

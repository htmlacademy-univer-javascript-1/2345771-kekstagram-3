//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (a, b) => {
  const first = Math.abs(a);
  const second = Math.abs(b);
  return (first + (second - first) * Math.random()).toFixed();
};

//Функция, возвращающая случайный элемент из массива
const getRandomItem = (items) => items[getRandomNumber(0, items.length - 1)];

//Функция для проверки максимальной длины строки
const maxLengthStringCheck = (string, maxLength) => String(string).length <= maxLength;

export {getRandomNumber, getRandomItem, maxLengthStringCheck};

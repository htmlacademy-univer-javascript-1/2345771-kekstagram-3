const getRandomNumber = (a, b) => {
  const first = Math.abs(a);
  const second = Math.abs(b);
  return (first + (second - first) * Math.random()).toFixed();
};

//Функция для проверки максимальной длины строки
const maxLengthStringCheck = (string, maxLength) => String(string).length <= maxLength;

getRandomNumber(2, 1);
maxLengthStringCheck('test', 10);

//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (a, b) => {
  const first = Math.abs(a);
  const second = Math.abs(b);
  return (first + (second - first) * Math.random()).toFixed();
};

//Функция для проверки максимальной длины строки
const maxLengthStringCheck = (string, maxLength) => String(string).length <= maxLength;

maxLengthStringCheck('test', 10);

const photos = [];
for (let i = 0; i < 25; i++) {
  photos[i] = {
    id:i + 1,
    url:['photos/', i + 1, '.jpg'].join(''),
    description:['картинка под номером ', i + 1].join(''),
    likes:getRandomNumber(15,200),
    comments:getRandomNumber(0,200)
  };
}

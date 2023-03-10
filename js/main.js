//Функция, возвращающая случайное целое число из переданного диапазона включительно
const randomNumber = (a, b) => (a + (b - a) * Math.random()).toFixed();

//Функция для проверки максимальной длины строки
const maxLengthStringCheck = (string, maxLength) => String(string).length <= maxLength;

randomNumber(2, 1);
maxLengthStringCheck('test', 10);

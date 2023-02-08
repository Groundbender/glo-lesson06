"use strict";

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const begin = function () {
  let randomNum = getRandomInt(100);
  const game = function () {
    const num = prompt("Угадай число от 1 до 100");
    if (num === null) {
      alert("До свидания");
      return;
    }
    if (isNum(num)) {
      const realNum = +num;
      if (realNum > randomNum) {
        alert("Загаданное число меньше");
        game();
      } else if (realNum > randomNum) {
        alert("Загаданное число больше");
        game();
      } else {
        if (confirm("Поздравляю, вы угадали!")) {
          begin();
        } else {
          alert("До свидания");
          return;
        }
      }
    } else {
      alert("Введите число");
      game();
    }
  };
  game();
};

begin();

console.log(randomNum);

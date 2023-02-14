"use strict";

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const begin = function () {
  let randomNum = getRandomInt(100);
  let attemps = 10;
  const game = function () {
    attemps--;
    if (attemps <= 0) {
      if (confirm("Попытки закончились, хотите сыграть еще ?")) {
        begin();
      } else {
        alert("До свидания");
        return;
      }
    } else {
      const num = prompt("Угадай число от 1 до 100");
      if (num === null) {
        alert("До свидания");
        return;
      }
      if (isNum(num)) {
        const realNum = +num;
        if (realNum > randomNum) {
          alert("Загаданное число меньше, осталось попыток: " + attemps);
          game();
        } else if (realNum > randomNum) {
          alert("Загаданное число больше, осталось попыток: " + attemps);
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
    }
  };
  game();
};

begin();

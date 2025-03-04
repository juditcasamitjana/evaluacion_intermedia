"use strict";

const inputNumber = document.querySelector(".js-number");
const btnTry = document.querySelector(".js-submit");
const clueElement = document.querySelector(".js-clue");
const attemptsElement = document.querySelector(".js-attempts");
const winnerText = "Has ganado campeona!!!";
const lowerText = "Demasiado bajo";
const higherText = "Demasiado alto";
const invalidNumber = "El número debe estar entre 1 y 100";

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const handleClick = (e) => {
    e.preventDefault();
    console.log("click");

    const userNumber = parseInt(inputNumber.value);
    console.log("userNumber", userNumber, typeof userNumber);

    if (randomNumber === userNumber) {
        clueElement.innerHTML = winnerText;
    } else if (userNumber > 100) {
        clueElement.innerHTML = invalidNumber;
    } else if (randomNumber < userNumber) {
        clueElement.innerHTML = higherText;
    } else {
        clueElement.innerHTML = lowerText;
    }
};

btnTry.addEventListener("click", handleClick);

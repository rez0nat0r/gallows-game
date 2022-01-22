'use strict';

// Шибениця



// Створюємо масив із слів

 let words = [
     "javascript",
     "monkey",
     "amazing",
     "pancake"
 ];

// Обираємо випадкове слово

let word = words[Math.floor(Math.random() * words.length)];

// Встановлюємо масив відповідей

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

// Ігровий цикл

while (remainingLetters > 0) {
    // Показуємо гравцю його прогрес
    alert(answerArray.join(" "));


    // Отримуємо варіанти відповідей від гравця

    let guess = prompt("Guess a letter, or click Cancel to stop playing!");
    if (guess === null) {
    // Виходимо із ігрового циклу
        break;
    }else if (guess.length !== 1) {
        alert("Please enter a single letter!");
    }else {
        // Оновлюємо стан гри за допомогою змінного параметра guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// Показуємо відповіді і вітаємо гравця

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);



// Шибениця на функціях


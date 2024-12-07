/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from "./data.js";

// Some useful elements
const guessInputForm = document.getElementById("guess-input");
const guessInput = guessInputForm.querySelector("input");
const messageContainer =
  document.getElementsByClassName("message-container")[0];
const emojiCluesContainer = document.getElementsByClassName(
  "emoji-clues-container"
)[0];

// Generate random number between 0-9
function generateRandomNumber() {
  return Math.round(Math.random() * (films.length - 1));
}

// Set the first random number on page load
let randomNum = generateRandomNumber();

// Number of rounds
let rounds = 3;

// Display the first set of emojies
emojiCluesContainer.innerHTML = films[randomNum].emoji.join(" ");

// Pause the game for 3 seconds
function pauseGameRound() {
  guessInputForm.querySelector("button").disabled = true;

  if (films.length === 1) {
    setTimeout(() => {
      document.querySelector("main").removeChild(guessInputForm);
      document.querySelector("main").removeChild(emojiCluesContainer);
      messageContainer.innerHTML = "That's all folks!";
      return;
    }, 3000);
  } else {
    setTimeout(() => {
      films.splice(randomNum, 1);
      randomNum = generateRandomNumber();
      rounds = 3;
      emojiCluesContainer.innerHTML = films[randomNum].emoji.join(" ");
      guessInput.value = "";
      messageContainer.innerHTML = "You have 3 guesses remaining.";
      guessInputForm.querySelector("button").disabled = false;
    }, 3000);
  }
}

// Play the guessing game round
function gameRound() {
  const regex = /^[a-zA-Z\s]+$/;
  const guessedTitle = guessInput.value.trim();

  if (guessedTitle === "" || !regex.test(guessedTitle)) {
    guessInput.value = "";
    return;
  }

  rounds--;

  if (rounds === 0) {
    messageContainer.innerHTML = `The film was ${films[randomNum].title}!`;
    pauseGameRound();
    return;
  }

  if (guessedTitle.toLowerCase() === films[randomNum].title.toLowerCase()) {
    messageContainer.innerHTML = "Correct!";
    pauseGameRound();
  } else {
    messageContainer.innerHTML = `Incorrect! You have ${rounds} more guesses remaining.`;
  }
}

// Submit the form
guessInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  gameRound();
});

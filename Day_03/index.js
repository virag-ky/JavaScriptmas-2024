/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄
*/

const emojiPattern = /^:[a-z]+:$/;
const colonCharacter = /:/g;

function emojifyWord(word) {
  const regularWord = word.replace(colonCharacter, "");

  if (emojiPattern.test(word)) {
    for (const [key, value] of Object.entries(hackedEmojis)) {
      if (key === regularWord) {
        return value;
      }
    }
  }

  return regularWord;
}

console.log(emojifyWord(":puke:"));

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map((str) => emojifyWord(str))
    .join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));

// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.

/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/

let anagrams = [
  ["Can Assault", "Santa Claus"],
  ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
  ["Frosty The Snowman", "Honesty Warms Front"],
  ["Drastic Charms", "Christmas Cards"],
  ["Congress Liar", "Carol Singers"],
  ["The Tin Glints", "Silent Night"],
  ["Be The Helm", "Betlehem"],
  ["Is Car Thieves", "Christmas Eve"],
];

// Sort alphabetically
function sortArray(arr) {
  return arr
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
}

function findAnagrams(array) {
  const newArray = [];

  array.forEach((arr) => {
    const arr1 = sortArray(arr[0]);
    const arr2 = sortArray(arr[1]);

    if (
      arr1.length === arr2.length &&
      arr1.every((item, index) => item === arr2[index])
    ) {
      newArray.push(arr);
    }
  });

  return anagrams.filter((arr) => newArray.includes(arr));
}

console.log(findAnagrams(anagrams));

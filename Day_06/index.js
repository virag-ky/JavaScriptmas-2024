const snowGlobe = document.querySelector(".snow-globe");

function createSnowflake() {
  let randomAnimationDuration = Math.round(Math.random() * (10 - 3) + 3);
  let randomPositionX = Math.round(Math.random() * 380);
  let randomSize = Math.round(Math.random() * (30 - 5) + 5);
  const snowflake = document.createElement("i");

  snowflake.innerHTML = "❄️";
  snowflake.classList.add("snowflake");
  snowflake.style.animationDuration = `${randomAnimationDuration}s`;
  snowflake.style.left = `${randomPositionX}px`;
  snowflake.style.fontSize = `${randomSize}px`;

  snowGlobe.appendChild(snowflake);

  setTimeout(() => {
    snowGlobe.removeChild(snowflake);
  }, randomAnimationDuration * 1000);
}

setInterval(createSnowflake, 100); // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/

const calendarContainer = document.getElementById("calendar");

for (let i = 1; i <= 24; i++) {
  let box = document.createElement("li");
  box.classList.add("calendar-box");
  let number = document.createElement("p");
  number.innerHTML = i;
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-gift");
  let description = document.createElement("p");
  description.innerHTML = "Open me!";
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}

const gifts = [
  "🎅",
  "🎄",
  "🎁",
  "🐶",
  "🎮",
  "💎",
  "🧸",
  "🧩",
  "📱",
  "️⚽️",
  "🛷",
  "👕",
  "🏀",
  "📚",
  "💻",
  "📷",
  "💰",
  "🎸",
  "⭐",
  "👜",
  "🛹",
  "🏎",
  "⌚",
  "🖥",
];

const boxes = [...document.querySelectorAll(".calendar-box")];

function openBox(e) {
  const b = e.currentTarget;
  b.style.transform = "rotate3d(0, 1, 0, 180deg)";
  b.style.backgroundColor = "#E8ECD7";
  b.innerHTML = "";
  setTimeout(() => {
    const gift = document.createElement("p");
    gift.classList.add("gift");
    gift.innerText = gifts[boxes.indexOf(b)];
    b.appendChild(gift);
  }, 1000);

  b.removeEventListener("click", openBox);
}

boxes.forEach((b) => {
  b.addEventListener("click", openBox);
});

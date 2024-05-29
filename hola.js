const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "I love you <3";
let index = 1;
let speed = 500 / speedElement.value;

const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};

writeText();

speedElement.addEventListener("input", (e) => (
  speed = 300 / e.target.value)
);
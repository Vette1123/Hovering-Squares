const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const Squares = 600;

for (let i = 0; i < Squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(elemnet) {
  const color = getRandomColor();
  elemnet.style.background = color;
  elemnet.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(elemnet) {
  elemnet.style.background = "#1d1d1d";
  elemnet.style.boxShadow = "0 0 2px #000";
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

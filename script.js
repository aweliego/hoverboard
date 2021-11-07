const container = document.getElementById('container');

const palettes = document.querySelectorAll('.palette');

let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES = 500; // amount of squares we want on the page

palettes.forEach((palette) => {
  palette.addEventListener('click', () => {
    if (palette.classList.contains('palette-one')) {
      colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    } else if (palette.classList.contains('palette-two')) {
      colors = ['#ffff00', '#1e90ff', '#2f4f4f', '#0000cd', '#ff00ff'];
    } else if (palette.classList.contains('palette-three')) {
      colors = ['#01df01', '#00ffff', '#fa58d0', '#f81130', '#f27d06'];
    } else if (palette.classList.contains('palette-four')) {
      colors = ['#f214df', '#0eb3f3', '#84eca2', '#f85247', '#ecf403'];
    }
  });
});

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

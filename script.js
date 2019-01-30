const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('#body-style');
const cssGradientCode = document.querySelector('h3');
const randomGradientGenerator = document.querySelector('input[type=button]');

function generateRandomColors() {
	let arr = [];

	for (let i = 0; i < 2; i++) {
		arr.push(randomColors());
	}
	return arr;
}

function randomColors() {
	let R = Math.floor(Math.random() * 256);
	let G = Math.floor(Math.random() * 256);
	let B = Math.floor(Math.random() * 256);

	// Generate an RGB format for linear gradient
	return `rgb(${R}, ${G}, ${B})`;
}

randomGradientGenerator.addEventListener('click', () => {
	// Generate an RGB format for linear gradient
	colors = generateRandomColors();

	body.style.background = `linear-gradient(to right, ${colors[0]}, ${
		colors[1]
	})`;

	cssGradientCode.textContent = `${body.style.background};`;
});

function setBackgroundGradientColors() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${
		color2.value
	})`;

	cssGradientCode.textContent = `${body.style.background};`;
}

color1.addEventListener('input', setBackgroundGradientColors);

color2.addEventListener('input', setBackgroundGradientColors);

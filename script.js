const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('#body-style');
const cssGradientCode = document.querySelector('h3');
const randomGradientGenerator = document.querySelector('input[type=button]');

const generateRandomColors = () => {
	let arr = [];

	for (let i = 0; i < 2; i++) {
		arr.push(randomColors());
	}
	return arr;
};

const randomColors = () => {
	let R = Math.floor(Math.random() * 256);
	let G = Math.floor(Math.random() * 256);
	let B = Math.floor(Math.random() * 256);

	// Generate an RGB format for linear gradient
	return `rgb(${R}, ${G}, ${B})`;
};

const setBackgroundStyle = (firstColor, secondColor) => {
	body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
};

randomGradientGenerator.addEventListener('click', () => {
	// Generate an RGB format for linear gradient
	colors = generateRandomColors();

	let firstColor = colors[0];
	let secondColor = colors[1];

	setBackgroundStyle(firstColor, secondColor);

	cssGradientCode.textContent = `${body.style.background};`;
});

const setBackgroundGradientColors = () => {
	let firstColor = color1.value;
	let secondColor = color2.value;

	setBackgroundStyle(firstColor, secondColor);

	cssGradientCode.textContent = `${body.style.background};`;
};

color1.addEventListener('input', setBackgroundGradientColors);

color2.addEventListener('input', setBackgroundGradientColors);

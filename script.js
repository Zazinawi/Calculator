function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

// Define operate function
function operate(operator, num1, num2) {
	if (operator === '+') {
		return add(num1, num2);
	} else if (operator === '-') {
		return subtract(num1, num2);
	} else if (operator === '*') {
		return multiply(num1, num2);
	} else if (operator === '/') {
		return divide(num1, num2);
	} else {
		return 'Invalid operator';
	}
}

// Get input elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const result = document.getElementById('result');

// Add event listeners to buttons
addButton.addEventListener('click', () => {
	const num1 = parseFloat(input1.value);
	const num2 = parseFloat(input2.value);
	const operator = '+';
	result.textContent = operate(operator, num1, num2);
});

subtractButton.addEventListener('click', () => {
	const num1 = parseFloat(input1.value);
	const num2 = parseFloat(input2.value);
	const operator = '-';
	result.textContent = operate(operator, num1, num2);
});

multiplyButton.addEventListener('click', () => {
	const num1 = parseFloat(input1.value);
	const num2 = parseFloat(input2.value);
	const operator = '*';
	result.textContent = operate(operator, num1, num2);
});

divideButton.addEventListener('click', () => {
	const num1 = parseFloat(input1.value);
	const num2 = parseFloat(input2.value);
	const operator = '/';
	result.textContent = operate(operator, num1, num2);
});
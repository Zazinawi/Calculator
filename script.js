// Initialize the display value to 0
let displayValue = 0;

// Initialize the first number to 0
let firstNumber = 0;

// Initialize the operator to an empty string
let operator = '';

// Get the display element
const display = document.getElementById('display-text');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.button-number');

// Add event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the clicked button's value
    const buttonValue = parseInt(button.textContent);
    
    // Update the display value
    displayValue = (displayValue * 10) + buttonValue;
    
    // Update the display text
    display.textContent = displayValue;
  });
});

// Clear the display
function clearDisplay() {
  displayValue = 0;
  display.textContent = displayValue;
}

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
const equalsButton = document.getElementById('equals');
const result = document.getElementById('result');

// Add event listeners to buttons
addButton.addEventListener('click', () => {
  // Save the first number and operator
  firstNumber = parseFloat(input1.value);
  operator = '+';
  
  // Clear the display and update it with the first number
  clearDisplay();
  display.textContent = firstNumber;
});

subtractButton.addEventListener('click', () => {
  // Save the first number and operator
  firstNumber = parseFloat(input1.value);
  operator = '-';
  
  // Clear the display and update it with the first number
  clearDisplay();
  display.textContent = firstNumber;
});

multiplyButton.addEventListener('click', () => {
  // Save the first number and operator
  firstNumber = parseFloat(input1.value);
  operator = '*';
  
  // Clear the display and update it with the first number
  clearDisplay();
  display.textContent = firstNumber;
});

divideButton.addEventListener('click', () => {
  // Save the first number and operator
  firstNumber = parseFloat(input1.value);
  operator = '/';
  
  // Clear the display and update it with the first number
  clearDisplay();
  display.textContent = firstNumber

let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
    if (display.value === Infinity) {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}

// Memory functions
function memoryRecall() {
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}

function memoryAdd() {
  try {
    memory += eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function memorySubtract() {
  try {
    memory -= eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const allowedKeys = /[0-9/*+\-=%\n\r]/;

  if (allowedKeys.test(key)) {
    event.preventDefault();

    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else {
      appendToDisplay(key);
    }
  }
});

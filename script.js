document.addEventListener('DOMContentLoaded', function () {
	const screen = document.getElementById('screen');
	let currentInput = '';

	function clearScreen() {
			screen.textContent = '';
			currentInput = '';
	}

	function appendInput(value) {
			currentInput += value;
			updateScreen();
	}

	function updateScreen() {
			screen.textContent = currentInput;
	}

	function calculate() {
			const operators = ['+', '-', '*', '/'];
			const lastChar = currentInput.slice(-1);

			if (operators.includes(lastChar) || currentInput === '') {
					return;
			}

			switch (true) {
					case currentInput.includes('+'):
							currentInput = currentInput.split('+').reduce((a, b) => parseFloat(a) + parseFloat(b));
							break;
					case currentInput.includes('-'):
							currentInput = currentInput.split('-').reduce((a, b) => parseFloat(a) - parseFloat(b));
							break;
					case currentInput.includes('*'):
							currentInput = currentInput.split('*').reduce((a, b) => parseFloat(a) * parseFloat(b));
							break;
					case currentInput.includes('/'):
							currentInput = currentInput.split('/').reduce((a, b) => parseFloat(a) / parseFloat(b));
							break;
					default:
							break;
			}

			updateScreen();
	}

	const buttons = document.querySelectorAll('.numbers button, .operation button');
	buttons.forEach(button => {
			button.addEventListener('click', function () {
					const buttonText = this.textContent;

					if (buttonText === '=') {
							calculate();
					} else if (buttonText === 'C') {
							clearScreen();
					} else {
							appendInput(buttonText);
					}
			});
	});
});

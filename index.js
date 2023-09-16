// get grid container
const sketchPad = document.querySelector('#sketchPad');

// variables for grid and color
let rows = [];
let currentColor = '#000000';

// handles grid resizing
const resSelector = document.querySelector('.slider');
resSelector.addEventListener('click', resize);

// needs refining sets erasor
const erasor = document.querySelector('#toggle');

erasor.addEventListener('click', event => {
	currentColor = '#f5f5f5';
});

// set color
const colorSelected = document.querySelector('#colors');
colorSelected.addEventListener('change', watchColorPicker, false);
function watchColorPicker(event) {
	erasor.checked = false;
	currentColor = event.target.value;
}

window.onload = event => {
	setRes();
};

// resize grid
function resize() {
	currentColor = colorSelected.value;
	erasor.checked = false;
	rows = [];
	let gridExists = document.querySelectorAll('.rows');
	console.log('step 1a');
	gridExists.forEach(div => {
		div.remove();
	});
	setRes();
}

function setRes() {
	for (let x = 0; x < resSelector.value; x++) {
		rows.push(x + 1);
	}
	setGrid();
}

// sets grid layout and adds mouseover event listeners to columns
function setGrid() {
	rows.forEach(row => {
		const newRow = document.createElement('div');
		newRow.classList.add('rows');
		sketchPad.appendChild(newRow);
	});
	sketchPad.childNodes.forEach(child => {
		for (let i = 0; i < rows.length; i++) {
			const newCol = document.createElement('div');
			newCol.addEventListener('mouseenter', e => {
				newCol.style.backgroundColor = currentColor;
			});
			newCol.classList.add('columns');
			child.appendChild(newCol);
		}
	});
}

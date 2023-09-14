const sketchPad = document.querySelector('#sketchPad');

const resSelector = document.querySelector('.slider');
const submit = document.querySelector('#submit');

resSelector.addEventListener('click', getRes);

let rows = [];

function getRes() {
	submit.value = resSelector.value;
	rows = [];
	let oldValue = document.querySelectorAll('.rows');
	console.log(oldValue.length);
	oldValue.forEach(div => {
		div.remove();
	});
	if (rows.length === 0) {
		for (let x = 0; x < resSelector.value; x++) {
			rows.push(x + 1);
		}
		console.log('rows: ' + rows.length);
	}
}

submit.addEventListener('click', () => {
	rows.forEach(row => {
		const newRow = document.createElement('div');
		newRow.classList.add('rows');
		sketchPad.appendChild(newRow);
	});
	sketchPad.childNodes.forEach(child => {
		for (let i = 0; i < rows.length; i++) {
			const newCol = document.createElement('div');
			newCol.addEventListener('mouseenter', e => {
				newCol.style.backgroundColor = 'black';
			});
			newCol.classList.add('columns');
			child.appendChild(newCol);
		}
	});
});

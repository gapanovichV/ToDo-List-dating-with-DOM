const pattern = document.querySelector('#past');
const input = document.querySelector('input');
const button = document.querySelector('button');

const del = document.querySelector('a');

function addTask(e) {
	const div = document.createElement('div');
	const p = document.createElement('p');
	const a = document.createElement('a');
	const img = document.createElement('img');

	div.className = 'task__wrapper';

	p.className = 'task__text';
	p.textContent = e;

	a.className = 'task__trash';
	img.src = '/img/trash.svg';

	a.appendChild(img);
	div.appendChild(p);
	div.appendChild(a);
	pattern.appendChild(div);

	a.addEventListener('click', () => {
		pattern.removeChild(div);
	});
}

button.addEventListener('click', () => {
	if (input.value === '') return;
	addTask(input.value);
	input.value = '';
});

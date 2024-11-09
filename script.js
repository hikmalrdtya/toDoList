function addTask() {
	const inputUser = document.querySelector('.wrapper-input input');
	const display = document.querySelector('.items');
	const parent = document.createElement('li');
	const text = document.createElement('p');
	const checkbox = document.createElement('input');

	if (inputUser.value == '') {
		alert('Please fill the input');
		return;
	}

	const listItem = document.getElementsByTagName('p');

	for (let i = 0; i < listItem.length; i++) {
		if (listItem[i].textContent == inputUser.value) {
			alert("Task already exist");
			return;
		}
	}

	checkbox.type = 'checkbox';
	text.textContent = inputUser.value;
	checkbox.setAttribute('onclick', 'crossText(this)');

	inputUser.value = '';

	return newDisplay(display, parent, text, checkbox);
}

function newDisplay(display, parent, text, checkbox) {
	const remove = document.createElement('button');

	remove.innerHTML = 'Delete';

	remove.classList.add('delete');
	remove.setAttribute('onclick', 'deleteList()');
	checkbox.classList.add('checkbox');

	parent.classList.add('item');
	parent.append(checkbox);
	parent.append(text);
	parent.append(remove);

	display.append(parent);
}

function crossText(checkbox) {
	const task = checkbox.nextElementSibling;
	if (checkbox.checked) {
		task.classList.add('line-through');
	} else {
		task.classList.remove('line-through');
	}
}

function deleteList() {
	const confirmation = confirm('Do you want to delete this task?');
	if (confirmation) {
		const parent = document.querySelector('.item');
		parent.remove();
	}
}




const todoList = [];

let x = document.querySelector('.add-button')

x.addEventListener('click', act)

function act () {
	
	let y = document.querySelector('.in')
	let value = y.value;

	let temp = {};
	temp.todo = value;
	temp.check = false;
	const i = todoList.length;
	todoList[i] = temp;
	console.log(todoList)
	out()
}

function out () {
	let out = '';
	for (let key in todoList) {
		if(todoList[key].check == true) {
			out += '<input type="checkbox" checked>'
		}
		else {
			out += '<input type="checkbox">'
		}
		out += todoList[key].todo + '<br>';
	}
	document.querySelector('.out').innerHTML = out;
}

// invoke json request 

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))
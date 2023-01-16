

const todoList = [];

// let x = document.querySelector('.add-button')

// x.addEventListener('click', act)

// function act () {
	
// 	let y = document.querySelector('.in')
// 	let value = y.value;

// 	let temp = {};
// 	temp.todo = value;
// 	temp.check = false;
// 	const i = todoList.length;
// 	todoList[i] = temp;
// 	console.log(todoList)
// 	out()


// }

// function out () {
// 	let out = '';
// 	for (let key in todoList) {
// 		if(todoList[key].check == true) {
// 			out += '<input type="checkbox" checked>'
// 		}
// 		else {
// 			out += '<input type="checkbox">'
// 		}
// 		out += todoList[key].todo + '<br>';
// 	}
// 	document.querySelector('.out').innerHTML = out;
// }

// invoke json request 
let out = ''

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
		// .then(json => console.log(Array.isArray(json)))
		.then(json => 
			{
				
				function checking (obj) { 
				obj.forEach((elem) => {
					if(elem.userId == 1 && elem.id ==1) {
					out +=  elem.title + '<br>'
					document.querySelector('.out').innerHTML = out
					}
				})}
				checking(json)
				
								checking(json)
						});
			
			let x = document.querySelector('.add-button')
					x.addEventListener('click', act)
				function act () {
					fetch('https://jsonplaceholder.typicode.com/todos/1', {
						method: 'PUT',
						body: JSON.stringify({
							id: 1,
							title: 'foo',
							completed: false,
							userId: 1,
						}),
						headers: {
							'Content-type': 'application/json; charset=UTF-8',
						},
						})
						.then((response) => response.json())
						.then(json => {
							let arr =[]
							arr.push(json)
							function checking (obj) { 
								obj.forEach((elem) => {
									if(elem.userId == 1 && elem.id ==1) {
									out +=  elem.title + '<br>'
									document.querySelector('.out').innerHTML = out
									}
								})}
								checking(arr)
								fetch('https://jsonplaceholder.typicode.com/todos/1')
      							.then(response => response.json())
      							.then(json => {
										out +=  json.title + '<br>'
										document.querySelector('.out').innerHTML = out
									})
							})
						}
						// 
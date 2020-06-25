console.log('In todo.js!');

//selectors
let todoInput = document.getElementById('todoinput');
let addTodoButton = document.querySelector('#addTodoButton');

//console.log('todo input field:', todoInput);
//console.log('add todo button:', addTodoButton);

//get the todoInput value.

let todoItemText = todoInput.value;
//JS addEventListener Method: Add an event listener to html element that has been selected in js
addTodoButton.addEventListener('click', elephantCallBackFunc);

function elephantCallBackFunc() {
    console.log ('Inside the elephant callback function!')
}



//Callback Function: This is a function that is invoked/run by another function as an argument.
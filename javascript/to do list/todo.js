console.log('In todo.js!');

//selectors
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.querySelector('#addTodoButton');
const todoList = document.querySelector('#todoList');

//console.log('todo input field:', todoInput);
//console.log('add todo button:', addTodoButton);

//get the todoInput value.


//JS addEventListener Method: Add an event listener to html element that has been selected in js
//anon function: finction is not defined elsewhere in the codebase, and it call immediately within the arg,
addTodoButton.addEventListener('click', function(){
    let todoItemText = todoInput.value;
    console.log(todoItemText);  
});




//Callback Function: This is a function that is invoked/run by another function as an argument.
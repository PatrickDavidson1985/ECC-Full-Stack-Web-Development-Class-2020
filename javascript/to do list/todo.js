console.log('In todo.js!');

//selectors
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.querySelector('#addTodoButton');
const todoList = document.querySelector('#todoList');
const todos = ['Static Test Todo'];

//console.log('todo input field:', todoInput);
//console.log('add todo button:', addTodoButton);

//get the todoInput value.
//example

//JS addEventListener Method: Add an event listener to html element that has been selected in js
//anon function: finction is not defined elsewhere in the codebase, and it call immediately within the arg,
addTodoButton.addEventListener('click', function () {
    //get the todoInput value
    let todoValue = todoInput.value;


    //sanitize trim = removing trailing and preceding whitespace
    todoValue.trim();

    //push the todo input value to the todos array
    if (todoInput.value !== '') {
        todos.push(todoInput.value);
        console.log(todos)
    } else {
        //modify the input element to have border red
        todoInput.style.border = '1px solid red';
        alert('You can\'t submit an empty value.');
    }
})

//generate todo list element <li>
function generateTodo(todo){
    const task = document.createElement('li');
    const taskText = documnt.createElement('span');
    const checkbox = document.createElement('input'); 
    const deleteButton = document.createElement('button');
//checkbox
checkbox.setAttribute('type', 'checkbox');

// Instert text 
taskText.innerText = todo;
//Build the task item
task.appendChild(taskText);

return task.appendChild(checkbox);
}


//



//Callback Function: This is a function that is invoked/run by another function as an argument.
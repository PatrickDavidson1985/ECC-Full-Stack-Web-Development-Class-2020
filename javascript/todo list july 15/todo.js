
// Object returned by function.
const todos = getSavedTodos();

const filters = {
    searchParam: ''
}

// Render all todo items.
renderTodos(todos);

// TODO: Search

// Create/Add Todo
const todoInput = document.querySelector('.add-control .form-group');
console.log(todoInput)
todoInput.addEventListener('submit', function(event) {
    // Stop the normal form submission process invoked by the browser.
    event.preventDefault();


    // Target the todo input
    let todo = event.target.elements.todoTitle
    todos.push({
        id: uuidv4(),
        title: todo.value,
        completed: false
    })

    // Save the todos to local storage.
    saveTodos(todos)

    // Reset the input.
    todo.value = '';

    // Re render all of the todos.
    renderTodos(todos)
})

// Add completed functionality

// Get todos from local storage.
function getSavedTodos() {
    const todosJSON = localStorage.getItem('todos');

    try {
        if (todosJSON) {
            return JSON.parse(todosJSON);
        } else {
            return [];
        }
    } catch (err) {
        console.error(err)
        return [];
    }
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function deleteTodo(id){
    console.log ('test');
}

function renderTodos(todos) {
    const todoListElement = document.querySelector('.todo-list');
    // Reset the ui since we will always be rendering todos.
    todoListElement.innerHTML = '';

    // TODO: filtering functionality.

    // const incompleteTodos = todos.filter(function(todoItem) {
    //     return todoItem.completed === false;
    // })

    for (let i = 0; i < todos.length; i++) {
        let todoDOM = createTodoDOM(todos[i]);
        todoListElement.appendChild(todoDOM)
    }
}

// Generate the DOM elements for the individual note
function createTodoDOM(todo) {
    const task = document.createElement('div');
    const taskText = document.createElement('span');
    const checkbox = document.createElement('input');
    const removeButton = document.createElement('button');

    // Checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.complete
    task.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Text
    taskText.textContent = todo.title
    task.appendChild(taskText)

    // Button
    removeButton.textContent = 'x';
    task.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => 
    {
        deleteTodo(todo.id)
        saveTodos(todos)
       renderTodos(todos, filters)
    });

    return task
}

// Get the DOM elements for the list summary

// Toggle completed value
const toggleTodo = (id) => {
    const todo = todos.find(function(todo) {
        return todo.id === id
    })
/*
    const todo = todos.findIndex(function(todo) {
        return todo.id === id
    })
    todo !== undefined ? todo.completed = !todo.completed : {}
}
*/

/*<button onclick="myFunction()">Try it</button>

<p id="demo"></p>


var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}

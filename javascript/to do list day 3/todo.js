console.log('In todo.js!');
// Init.
const todoState = [];
// Selectors.
const addInput = document.querySelector('.add-control .form-group input.form-control');
const addInputButton = document.querySelector('.add-control .form-group i.form-control-feedback');
const errParagraph = document.querySelector('.err');
const todoListElement = document.querySelector('.todo-list');
// console.log(addInputButton);
// Bind click event to plus button on input field, and fire addTodo function.
addInputButton.addEventListener('click', addTodo);
// Add Todo
function addTodo(event) {
    // Reset Error message.
    errParagraph.classList.add('hidden');
    // Take in the input value
    const todoValue = addInput.value
    // Check if todoValue has an actual value.
    if (todoValue) {
        todoState.push(todoValue);
        // Generate a todo item.
        const newTodo = generateTodoItem(todoValue);
        // Append that item to a list or div
        todoListElement.appendChild(newTodo)
        // Reset the value to empty string.
        addInput.value = '';
    } else {
        // Handle error.
        errParagraph.classList.remove('hidden');
    }
    console.log(todoState);
}
function generateTodoItem(value) {
    // Create our html elements.
    const todoItem = document.createElement('div');
    const todoItemLeft = document.createElement('li');
    const todoItemRight = document.createElement('li');
    const todoItemCheckbox = document.createElement('input');
    const todoItemLabel = document.createElement('label');
    // const todoItemSpan = document.createElement('span');
    // Checkbox
    todoItemCheckbox.setAttribute('type', 'checkbox');
    // Label
    todoItemLabel.innerText = value;
    // Add styles
    todoItem.appendChild(todoItemCheckbox);
    todoItem.appendChild(todoItemLabel);
    return todoItem;
}
 
const todoItemHTML = '<li>' +
        '<div class="checkbox">' +
            '<span class="close">' +
                '<i class="fa fa-times"></i>' +
            '</span>' +
            '<label>' +
                '<span class="checkbox-mask"></span>' +
                '<input type="checkbox" />' +
                todoValue +
            '</label>' +
        '</div>' +
    '</li>';
white_check_markeyesraised_hands







// Larry's code.
// ============================================
// LECTURE TEST
// Triangle Loop
// let hashes = '';
// for (let index = 0; index <= 7; index++) {
//     hashes += '#';
//     console.log(hashes);
// }
// Remember: break the solution down into its simplest parts
// Part 1: limit to seven lines
// Part 2. Create an initial value
// FizzBuzz
// Use Mod %
// for (let index = 1; index <= 100; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (index % 3 === 0) {
//         console.log('Fizz');
//     } else if (index % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(index);
//     }
// }
// const checkboxElement = document.createElement('input');
// returns <input />
// checkboxElement.setAttribute('type', 'checkbox');
// returns <input type="checkbox" />
// document.body.appendChild(checkboxElement);
// const html = 'Injecting this';
// const inputWrapper = document.querySelector('.form-group');
// inputWrapper.innerHTML = html;
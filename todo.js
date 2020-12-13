'use strict';

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-todo');
const todos = document.querySelector('.todos');

const deleteStorage = (id) => {
    document.querySelector(`[data-id="${id}"]`)
    .parentElement.remove();
    localStorage.removeItem(id);
}
const addDeleteEventListener = id =>{
    document.querySelector(`[data-id="${id}"]`)
    .addEventListener('click', ()=> deleteStorage(id));
}
let storageId =1;
const addTodo =() => {
    if(todoInput.value) {
        const item = document.createElement('div');
        item.classList.add('todo');
        item.innerHTML = `${todoInput.value} <button class="delete-button" data-id="${storageId}">X</button>`;
        todos.insertBefore(item, todos.firstChild);
        localStorage.setItem(storageId.toString(), todoInput.value);
        addDeleteEventListener(storageId);
        todoInput.value ='';
        storageId +=1;
    }
}

Object.keys(localStorage).forEach((keys) => {
     const item = document.createElement('div');
        item.classList.add('todo');
        item.innerHTML = `${localStorage.getItem(keys)} <button class="delete-button" data-id="${keys}">X</button>`;
        todos.insertBefore(item, todos.firstChild);
        addDeleteEventListener(keys);

});

const addTodoButtonListener = () => {
    addButton.addEventListener('click', addTodo);
};


addTodoButtonListener();

const addButton = document.querySelector('.add-button');
const list = document.querySelector('.list');
const textBox = document.querySelector('.text-box');
const tasks = document.querySelectorAll('.task');

const task = document.createElement("div");
task.classList.add('task');
const text = document.createElement("div");
const deleteButton = document.createElement("div");
task.append(text);

addButton.addEventListener('click', () => {
    const text = textBox.value;
    if (text !== "") {
        list.insertAdjacentElement('beforeend', createTask(textBox.value));
        textBox.value = null;
    }
});

function createTask(text){
    const task = document.createElement("div");
    task.classList.add('task');
    const textContainer = document.createElement("div");
    textContainer.classList.add('task-text');
    textContainer.innerText = text;
    const deleteButton = document.createElement("div");
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.classList.add('none');
    task.addEventListener('mouseover', () => {deleteButton.classList.toggle('none')});
    task.addEventListener('mouseout', () => {deleteButton.classList.toggle('none')});
    deleteButton.addEventListener('click', () => {task.remove()});
    task.addEventListener('click', () => {
        task.classList.toggle('green-border');
        textContainer.classList.toggle('line-through');
    });
    task.append(textContainer, deleteButton);

    return task;
}
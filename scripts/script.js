const addButton = document.querySelector('.add-button');
const list = document.querySelector('.list');
const textBox = document.querySelector('.text-box');
const tasks = document.querySelectorAll('.task');

addButton.addEventListener('click', () => {
    const text = textBox.value;
    if (text !== "") {
        const task = document.createElement("div");
        task.innerText = textBox.value;
        task.classList.add('task');
        task.addEventListener('click', () => {task.classList.toggle('done');});
        list.insertAdjacentElement('beforeend', task);
        textBox.value = null;
    }
});
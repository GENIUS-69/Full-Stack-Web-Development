document.addEventListener('DOMContentLoaded', () => {

    let todoInput = document.getElementById('todo-input');
    let addTaskButton = document.getElementById('add-task-btn');
    let todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => renderTasks(task));

    addTaskButton.addEventListener('click', () => {

        const taskText = todoInput.value.trim();
        if (taskText === '') return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            complete: false
        }

        tasks.push(newTask);
        renderTasks(newTask); // Render the new task immediately
        saveTask();
        todoInput.value = '';
        console.log(tasks);
    });

    function renderTasks(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (task.completed) {
            li.classList.add('completed');
        }
        li.innerHTML =
            `<span>${task.text}</span>
        <button class="delete-btn">Delete</button>`
            ;
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                return;
            }
            task.complete = !task.complete;
            li.classList.toggle('completed');
            saveTask();
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t=> t.id !== task.id);
            li.remove();
            saveTask();
        })
        todoList.appendChild(li);
    }

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})
document.addEventListener('DOMContentLoaded', function() {
    loadTasksFromLocalStorage();
});

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        // Crear nuevo elemento de lista
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn" onclick="editTask(this)">Editar</button>
                <button class="remove-btn" onclick="removeTask(this)">Eliminar</button>
            </div>
        `;

        // Agregar a la lista
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        newTaskInput.value = '';

        // Guardar en el almacenamiento local
        saveTaskToLocalStorage(taskText);
    }
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text').innerText;

    // Eliminar del DOM
    taskItem.remove();

    // Eliminar del almacenamiento local
    removeTaskFromLocalStorage(taskText);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Editar tarea:', taskTextElement.innerText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.innerText = newTaskText;

        // Actualizar en el almacenamiento local
        updateTaskInLocalStorage(newTaskText);
    }
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex(t => t === updatedTask);

    if (index !== -1) {
        tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <div class="task-buttons">
                <button class="edit-btn" onclick="editTask(this)">Editar</button>
                <button class="remove-btn" onclick="removeTask(this)">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

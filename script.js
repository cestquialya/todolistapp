
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const hamburger = document.querySelector('.hamburger-icon');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});





// Todo list functionality
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-content">
            <label class="task-checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
            <span class="task-text">${taskText}</span>
        </div>
        <div class="task-actions">
            <button class="important-btn" title="Important !!"><img CLASS="petit"  src="kuromi.png" alt="kuromi"></button>
           <button class="delete-btn">×</button>
        </div>
    `;

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked);
    });

    const importantBtn = li.querySelector('.important-btn');
    importantBtn.addEventListener('click', () => {
        importantBtn.classList.toggle('active');
        li.querySelector('.task-text').classList.toggle('important');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.classList.add('slide-out');
        setTimeout(() => li.remove(), 300);
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

// Event listeners

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});


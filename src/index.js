/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
import './style.css';

const submit = document.querySelector('.add-btn');
const tasksDiv = document.querySelector('.tasks');
const taskInput = document.querySelector('.add-task input');

let editId;
let isEditTask = false;
let tasks = JSON.parse(localStorage.getItem('task-list'));

const saveToLocalStorage = (arr) => {
  localStorage.setItem('task-list', JSON.stringify(arr));
};

const addElemToPage = () => {
  let div = '';
  if (tasks) {
    tasks.forEach((task) => {
      let isCompleted;
      if (task.completed === true) {
        isCompleted = 'checked';
      } else {
        isCompleted = '';
      }
      div += `
      <div class='task' data-id='task.id'>        
        <input id="${
  task.index
}" class='checkbox' type="checkbox" onclick='updateStatus(this)'>
        <p id='${task.index}'class='text ${isCompleted}'>${task.descripton}</p>
        <button type="button"  id="${task.index}" class='edit' >
        <span onclick='editTask(${task.index - 1}, "${
  task.descripton
}")' class="material-symbols-outlined">edit</span>
        </button>
        <button type="button"  id="${task.index}" class='del' onclick='del(${
  task.index
})' >
        <span class='material-symbols-outlined del'>delete</span>
        </button>
        </div>
      `;
    });
  }
  tasksDiv.innerHTML = div;
};
addElemToPage();

// ====== Add Task Function =======
submit.addEventListener('click', () => {
  const userTask = taskInput.value;
  if (!isEditTask) {
    if (!tasks) {
      tasks = [];
    }
    const task = {
      index: tasks.length + 1,
      descripton: userTask,
      completed: false,
    };
    tasks.push(task);
  } else {
    isEditTask = false;
    tasks[editId].descripton = userTask;
  }
  taskInput.value = '';
  taskInput.focus();
  saveToLocalStorage(tasks);
  addElemToPage();
});

// ====== Add Task Function with Enter Key =======
taskInput.addEventListener('keyup', (e) => {
  const userTask = taskInput.value;
  if (e.key === 'Enter' && userTask) {
    if (!isEditTask) {
      if (!tasks) {
        tasks = [];
      }
      const task = {
        index: tasks.length + 1,
        descripton: userTask,
        completed: false,
      };
      tasks.push(task);
    } else {
      isEditTask = false;
      tasks[editId].descripton = userTask;
    }
    taskInput.value = '';
    saveToLocalStorage(tasks);
    addElemToPage();
  }
});

// ======Edit Function=======
window.editTask = (taskId, taskDescripton) => {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskDescripton;
  taskInput.focus();
};

// ======Delete Function=======
window.del = (id) => {
  tasks = tasks.filter((task) => task.index !== id);
  tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  saveToLocalStorage(tasks);
  addElemToPage();
};

// ======Checked Function=======
window.updateStatus = (selectedTask) => {
  const taskName = selectedTask.nextElementSibling;
  if (selectedTask.checked) {
    taskName.classList.add('checked');
    tasks[selectedTask.id - 1].completed = true;
  } else {
    taskName.classList.remove('checked');
    tasks[selectedTask.id - 1].completed = false;
  }
  saveToLocalStorage(tasks);
};

// ======Clear Completed Function=======
const clearCompletedBtn = document.querySelector('.clear');

clearCompletedBtn.addEventListener('click', () => {
  const completed = tasks.filter((task) => !task.completed);
  completed.forEach((e, i) => {
    e.index = i + 1;
  });
  //
  saveToLocalStorage(completed);
  window.location.reload();
});

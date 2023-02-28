"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElemToPage\": () => (/* binding */ addElemToPage),\n/* harmony export */   \"taskInput\": () => (/* binding */ taskInput)\n/* harmony export */ });\n/* eslint-disable import/no-mutable-exports */\nconst submit = document.querySelector('.add-btn');\nconst tasksDiv = document.querySelector('.tasks');\nconst taskInput = document.querySelector('.add-task input');\n\nlet editId;\nlet isEditTask = false;\nlet tasks = JSON.parse(localStorage.getItem('task-list'));\n\nconst addElemToPage = () => {\n  let div = '';\n  if (tasks) {\n    tasks.forEach((task) => {\n      let isCompleted;\n      if (task.completed === true) {\n        isCompleted = 'checked';\n      } else {\n        isCompleted = '';\n      }\n      div += `\n      <div class='task' data-id='task.id'>        \n        <input id=\"${task.index}\" class='checkbox' type=\"checkbox\" onclick='updateStatus(this)'>\n        <p id='${task.index}'class='text ${isCompleted}'>${task.descripton}</p>\n        <button type=\"button\"  id=\"${task.index}\" class='edit' >\n        <span onclick='editTask(${task.index - 1}, \"${task.descripton}\")' class=\"material-symbols-outlined\">edit</span>\n        </button>\n        <button type=\"button\"  id=\"${task.index}\" class='del' onclick='del(${task.index})' >\n        <span class='material-symbols-outlined del'>delete</span>\n        </button>\n        </div>\n      `;\n    });\n  }\n  tasksDiv.innerHTML = div;\n};\naddElemToPage();\n\n// ====== Add Task Function =======\nsubmit.addEventListener('click', () => {\n  const userTask = taskInput.value;\n  if (!isEditTask) {\n    if (!tasks) {\n      tasks = [];\n    }\n    const task = {\n      index: tasks.length + 1,\n      descripton: userTask,\n      completed: false,\n    };\n    tasks.push(task);\n  } else {\n    isEditTask = false;\n    tasks[editId].descripton = userTask;\n  }\n  taskInput.value = '';\n  taskInput.focus();\n  localStorage.setItem('task-list', JSON.stringify(tasks));\n  addElemToPage();\n});\n\n// ====== Add Task Function with Enter Key =======\ntaskInput.addEventListener('keyup', (e) => {\n  const userTask = taskInput.value;\n  if (e.key === 'Enter' && userTask) {\n    if (!isEditTask) {\n      if (!tasks) {\n        tasks = [];\n      }\n      const task = {\n        index: tasks.length + 1,\n        descripton: userTask,\n        completed: false,\n      };\n      tasks.push(task);\n    } else {\n      isEditTask = false;\n      tasks[editId].descripton = userTask;\n    }\n    taskInput.value = '';\n    localStorage.setItem('task-list', JSON.stringify(tasks));\n    addElemToPage();\n  }\n});\n\n// ======Edit Function=======\nwindow.editTask = (taskId, taskDescripton) => {\n  editId = taskId;\n  isEditTask = true;\n  taskInput.value = taskDescripton;\n  taskInput.focus();\n};\n\n// ======Delete Function=======\nwindow.del = (id) => {\n  tasks = tasks.filter((task) => task.index !== id);\n  tasks.forEach((e, i) => {\n    e.index = i + 1;\n  });\n  localStorage.setItem('task-list', JSON.stringify(tasks));\n  addElemToPage();\n};\n\n// ======Checked Function=======\nwindow.updateStatus = (selectedTask) => {\n  const taskName = selectedTask.nextElementSibling;\n  if (selectedTask.checked) {\n    taskName.classList.add('checked');\n    tasks[selectedTask.id - 1].completed = true;\n  } else {\n    taskName.classList.remove('checked');\n    tasks[selectedTask.id - 1].completed = false;\n  }\n  localStorage.setItem('task-list', JSON.stringify(tasks));\n};\n\n// ======Clear Completed Function=======\nconst clearCompletedBtn = document.querySelector('.clear');\n\nclearCompletedBtn.addEventListener('click', () => {\n  const completed = tasks.filter((task) => !task.completed);\n  completed.forEach((e, i) => {\n    e.index = i + 1;\n  });\n  localStorage.setItem('task-list', JSON.stringify(completed));\n  window.location.reload();\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
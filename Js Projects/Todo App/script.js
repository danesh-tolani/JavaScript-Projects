// Selectors
const taskInput = document.querySelector(".input-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos); // runs the function after all the content is loaded on the page
addTaskBtn.addEventListener("click", addTodo);
taskList.addEventListener("click", manipulateTask);
filterOption.addEventListener("click", filterTodo);

// Functions

// Add Todo Task
function addTodo(event) {
  event.preventDefault(); //  prevents page from refreshing on doing anything inside the form

  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-tasks");

  // Create li inside todoDive
  const newTodo = document.createElement("li");
  newTodo.innerText = taskInput.value;
  newTodo.classList.add("task");
  todoDiv.appendChild(newTodo); // add li item to div

  // add todo to local storage
  saveLocalTodos(taskInput.value);

  // todo task buttons
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("todo-btn", "todo-done");
  doneBtn.innerHTML = "<img src='./assets/icons8-done.svg' alt='' class='done-btn' />";
  todoDiv.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo-btn", "todo-delete");
  deleteBtn.innerHTML = "<img src='./assets/icons8-delete.svg' alt='' class='del-btn' />";
  todoDiv.appendChild(deleteBtn);

  taskList.appendChild(todoDiv);

  // clear the input box after task is added to list
  taskInput.value = "";
}

// Delete Todo Task
function manipulateTask(event) {
  const item = event.target;

  if (item.classList[1] === "todo-delete") {
    const task = item.parentElement;
    task.classList.add("fall");
    removeLocalTodo(task);
    task.addEventListener("transitionend", function () {
      // transitioned event listener waits for the animations to finish after which it runs
      task.remove();
    });
  }

  // Check the Task
  if (item.classList[1] === "todo-done") {
    const task = item.parentElement;
    task.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = taskList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-tasks");

    // Create li inside todoDive
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("task");
    todoDiv.appendChild(newTodo); // add li item to div

    // todo task buttons
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("todo-btn", "todo-done");
    doneBtn.innerHTML = "<img src='./assets/icons8-done.svg' alt='' class='done-btn' />";
    todoDiv.appendChild(doneBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-btn", "todo-delete");
    deleteBtn.innerHTML = "<img src='./assets/icons8-delete.svg' alt='' class='del-btn' />";
    todoDiv.appendChild(deleteBtn);

    taskList.appendChild(todoDiv);
  });
}

function removeLocalTodo(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let task = todo.children[0].innerText;
  let index = todos.indexOf(task);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = taskText;

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "small-btn";
  completeBtn.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "small-btn";
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(deleteBtn);

  listItem.appendChild(taskSpan);
  listItem.appendChild(buttonGroup);

  taskList.appendChild(listItem);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", createTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});

const newTask = document.getElementById("create-task-form");

newTask.addEventListener("submit", makeNewTask);

const makeNewTask = (e) => {
  e.preventDefault();
  const newTaskBody = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskBody.value;
  const priority = document.querySelector("select");

  const addPriority = (priority) => {
    if (priority.value === "high") {
      priority.classList.add("high");
    } else if (priority.value === "medium") {
      priority.classList.add("medium");
    } else if (priority.value === "low") {
      priority.classList.add("low");
    }
  };
  appendNewTask(newTask);
  e.target.reset();
};
const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};

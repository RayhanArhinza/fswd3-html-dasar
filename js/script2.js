const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
let LIST = [], id = 0;

// Load data from local storage
let data = localStorage.getItem("TODO");
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    LIST.forEach(item => addToDo(item.name, item.id, item.done, item.trash));
}

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
// Add to do function
function addToDo(toDo, id, done, trash) {
    if (trash) return;
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item = `<li class="item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <div>
        <i class="fa ${DONE} co" job="complete" id="${id}"></i>
        <p class="text ${LINE}" style="margin-left: 10px;">${toDo}</p>
      </div>
      <i class="fa fa-trash-o de" job="delete" id="${id}" style="margin-left: auto;"></i>
    </li>`;
    list.insertAdjacentHTML("beforeend", item);
}

// Add an item to the list using the enter key
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const toDo = input.value.trim();
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({ name: toDo, id: id, done: false, trash: false });
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
            // Send the to-do list to the API
            fetch("https://crudcrud.com/api/e02522e91d784c50b093dfbee8d96d52/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: toDo })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        }
        input.value = "";
    }
});


// Complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = !LIST[element.id].done;
    localStorage.setItem("TODO", JSON.stringify(LIST));
}

// Remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
    localStorage.setItem("TODO", JSON.stringify(LIST));
}

// Target the items created dynamically
list.addEventListener("click", function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob === "complete") completeToDo(element);
    else if (elementJob === "delete") removeToDo(element);
});

// Clear local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
const ToDoList = [];
const todoBody = document.getElementById("todoListBody");

function clearNodeList() {
  console.info(todoBody.childNodes);
  while (todoBody.firstChild) {
    //console.info(todoBody.firstChild);
    todoBody.removeChild(todoBody.firstChild);
  }
}

function removeToDoList(index) {
  console.info(`Remove : ${index}`);
  ToDoList.splice(index, 1);
  console.info(ToDoList);
  displayToDoList();
}

function addToDoList(index, todo) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  tr.appendChild(td);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  td.appendChild(buttonDone);
  buttonDone.onclick = () => {
    removeToDoList(index);
  };

  const tdToDo = document.createElement("td");
  tdToDo.textContent = `No. ${index + 1} - ${todo}`;
  tr.appendChild(tdToDo);

  //const todoBody = document.getElementById("todoListBody");
  todoBody.appendChild(tr);
  //console.info(todoBody.firstChild.textContent);
}

function displayToDoList() {
  clearNodeList(); //biar yang tampil hnya Nodelist Terakhir
  for (let i = 0; i < ToDoList.length; i++) {
    const todo = ToDoList[i];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      //.includes karena string kosong maka tetap bernilai true
      addToDoList(i, todo);
    }
  }
}

document.forms["todoForm"].onsubmit = (e) => {
  e.preventDefault();

  const todo = document.forms["todoForm"]["todo"].value;
  ToDoList.push(todo);
  document.forms["todoForm"].reset();
  console.info(ToDoList);
  displayToDoList();
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = () => {
  displayToDoList();
};
searchInput.onkeydown = () => {
  displayToDoList();
};

clearNodeList();

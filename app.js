"use strict";

const input = document.querySelector("input");
const addBtn = document.querySelector(".addbtn");
const ul = document.querySelector("ul");

let mode = false;
let currLi = null;

addBtn.addEventListener("click", () => {
  mode ? updateTask() : addTask();
});

function addTask() {
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    createBtn(li);
    ul.appendChild(li);
    input.value = "";
  }
}

function updateTask() {
  const value = input.value.trim();
  if (value && currLi) {
    currLi.firstChild.textContent = value;
    reset();
  }
}

function editTask(li) {
  currLi = li;
  input.value = li.firstChild.textContent;
  addBtn.textContent = "Update";
  mode = true;
}

function reset() {
  input.value = "";
  addBtn.textContent = "Add";
  mode = false;
  currLi = null;
}

function createBtn(li) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.classList.add("edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete");

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
}

ul.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("delete")) {
    const li = target.parentElement;
    li.remove();
  } else if (target.classList.contains("edit")) {
    const li = target.parentElement;
    editTask(li);
  }
});

// const input = document.querySelector("input");
// const addbtn = document.querySelector(".addbtn");
// const dltbtn = document.querySelector(".dltbtn");
// const ul = document.querySelector("ul");
// let value = false;
// addbtn.addEventListener("click", decide);
// function decide() {
//   value ? up() : taskAdd();
// }
// function taskAdd() {
//   if (input.value) {
//     let li = document.createElement("li");
//     ul.append(li);
//     li.innerText = input.value;
//     input.value = "";
//     creatbtn(li);
//   }
// }
// function creatbtn(li) {
//   let deletebtn = document.createElement("button");
//   let editbtn = document.createElement("button");
//   deletebtn.classList.add("delete");
//   editbtn.classList.add("edit");
//   li.append(deletebtn);
//   li.append(editbtn);
//   deletebtn.innerText = "❌";
//   editbtn.innerText = "✏️";
// }
// let inner;
// function up() {
//   updateText = input.value;
//   d.childNodes[0].textContent = updateText;
//   inner = updateText;
//   addbtn.innerText = "add";
//   value = false;
//   input.value = "";
// }
// let d;
// function edit(li) {
//   d = li;
//   inner = li.childNodes[0].data;
//   input.value = inner;
//   addbtn.innerText = "update";
//   value = true;
// }
// ul.addEventListener("click", function (e) {
//   if (e.target.className == "delete") {
//     const parent = e.target.parentElement;
//     parent.remove();
//   } else if (e.target.classList == "edit") {
//     let c = e.target;
//     let r = c.parentElement;
//     edit(r);
//   }
// });

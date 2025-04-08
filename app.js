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


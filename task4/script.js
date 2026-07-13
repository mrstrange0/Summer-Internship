/* ---------- Contact Form ---------- */
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! I will get back to you soon.");
  form.reset();
});

/* ---------- To-Do App ---------- */
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;
  tasks.push({ text: text, done: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

renderTasks();

/* ---------- Product Listing ---------- */
const products = [
  { name: "Headphones", category: "Electronics", price: 1500, rating: 4.5 },
  { name: "T-Shirt", category: "Clothing", price: 500, rating: 4.0 },
  { name: "Novel Book", category: "Books", price: 300, rating: 4.7 },
  { name: "Smartwatch", category: "Electronics", price: 3000, rating: 4.2 },
  { name: "Jeans", category: "Clothing", price: 1200, rating: 3.9 },
  { name: "Cookbook", category: "Books", price: 450, rating: 4.4 },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");

function renderProducts() {
  let list = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    list = list.filter((p) => p.category === category);
  }

  const sortValue = sortBy.value;
  if (sortValue === "priceLow") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHigh") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  productGrid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ${p.rating} ⭐</p>
    `;
    productGrid.appendChild(card);
  });
}

categoryFilter.addEventListener("change", renderProducts);
sortBy.addEventListener("change", renderProducts);

renderProducts();
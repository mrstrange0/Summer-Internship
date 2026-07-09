// Contact form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let valid = true;

  if (name.value.trim().length < 2) {
    document.getElementById("nameError").textContent = "Enter your full name.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "Message too short.";
    valid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  const success = document.getElementById("formSuccess");
  if (valid) {
    success.textContent = "Thanks! Your message has been received.";
    form.reset();
  } else {
    success.textContent = "";
  }
});

// Dynamic to-do list
const todoText = document.getElementById("todoText");
const todoList = document.getElementById("todoList");

document.getElementById("addTodoBtn").addEventListener("click", addTodo);
todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

function addTodo() {
  const text = todoText.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span><button>Remove</button>`;

  li.querySelector("span").addEventListener("click", () =>
    li.classList.toggle("done"),
  );
  li.querySelector("button").addEventListener("click", () => li.remove());

  todoList.appendChild(li);
  todoText.value = "";
}

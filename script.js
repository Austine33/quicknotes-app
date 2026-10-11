const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

let notes = [];

function render() {
  notesList.textContent = "";

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    const li = document.createElement("li");
    li.classList.add("note-card", "category-" + note.category);

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const label = document.createElement("span");
    label.classList.add("category-label");
    label.textContent = note.category;

    const date = document.createElement("small");
    date.classList.add("note-date");
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    li.append(text, label, date, deleteBtn);
    notesList.appendChild(li);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const note = {
    id: Date.now(),
    text: noteInput.value.trim(),
    category: categorySelect.value,
    createdAt: new Date().toLocaleString(),
  };

  notes.push(note);
  noteInput.value = "";
  render();
});
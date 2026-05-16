const list = document.querySelector("#list");
const btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", addTask);

function addTask() {
  const newLine = document.createElement("div");

  newLine.className = "d-flex align-items-center gap-2";

  newLine.innerHTML = `
    <input 
      type="text" 
      class="form-control form-control-sm" 
      placeholder="Digite aqui a tarefa..."
    >

    <div class="form-check form-switch m-0">
      <input class="form-check-input check-done" type="checkbox" role="switch">
    </div>

    <button class="btn btn-danger btn-sm btn-delete">
      <i class="bi bi-trash-fill"></i>
    </button>
  `;

  list.appendChild(newLine);
}

list.addEventListener("change", (event) => {
  if (event.target.classList.contains("check-done")) {
    const line = event.target.closest("div.d-flex");
    const inputTxt = line.querySelector("input[type='text']");

    inputTxt.disabled = event.target.checked;
  }
});

list.addEventListener("click", (event) => {
  const btnDelete = event.target.closest(".btn-delete");

  if (btnDelete) {
    const line = btnDelete.closest("div.d-flex");
    line.remove();
  }
});
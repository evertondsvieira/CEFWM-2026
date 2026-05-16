const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const output = document.querySelector("output");

function changeValue(step) {
  output.value = Number(output.value || 0) + step;
  output.innerHTML = output.value;

  if (output.value > 0) {
    output.style.color = "green";
  } else if (output.value < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "";
  }
}

plus.addEventListener("click", () => changeValue(1));
minus.addEventListener("click", () => changeValue(-1));
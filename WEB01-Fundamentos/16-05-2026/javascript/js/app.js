const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const color = document.querySelector("input").value;

  main.style.backgroundColor = color;
}); 
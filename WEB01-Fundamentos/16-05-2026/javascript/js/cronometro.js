const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const restart = document.querySelector("#restart");
const output = document.querySelector("output");

let count = 0;
let timer;

start.addEventListener("click", () => {
  clearInterval(timer);

  timer = setInterval(() => {
    count++;
    output.innerHTML = count;
  }, 1000); // s
});

pause.addEventListener("click", () => {
  clearInterval(timer);
});

restart.addEventListener("click", () => {
  clearInterval(timer);
  count = 0;
  output.innerHTML = count;
});
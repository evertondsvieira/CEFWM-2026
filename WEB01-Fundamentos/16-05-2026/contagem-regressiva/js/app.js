async function getData() {
  const url = "http://localhost:3000/event";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function startCount() {
  const data = await getData();

  if (!data) {
    console.error("Não foi possível buscar os dados do backend.");
    return;
  }

  const { targetDate, currentDate } = data;

  const target = new Date(targetDate).getTime();
  const serverNow = new Date(currentDate).getTime();
  const browserNow = Date.now();

  const offset = serverNow - browserNow;

  let interval;

  function updateCount() {
    const now = Date.now() + offset;
    let diff = target - now;

    if (diff <= 0) {
      diff = 0;

      if (interval) {
        clearInterval(interval);
      }

      changeToGreen();
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateCount();

  interval = setInterval(updateCount, 1000);
}

function changeToGreen() {
  const fields = [
    document.getElementById("days"),
    document.getElementById("hours"),
    document.getElementById("minutes"),
    document.getElementById("seconds")
  ];

  fields.forEach((field) => {
    field.classList.remove("bg-dark");
    field.classList.add("bg-success");
  });
}

startCount();
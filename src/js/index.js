const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

setInterval(() => {
  let dateToday = new Date();

  let hours = dateToday.getHours().toString().padStart(2, "0");
  let minutes = dateToday.getMinutes().toString().padStart(2, "0");
  let seconds = dateToday.getSeconds().toString().padStart(2, "0");

  horas.textContent = hours;
  minutos.textContent = minutes;
  segundos.textContent = seconds;
});

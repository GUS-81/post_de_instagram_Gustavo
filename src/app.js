// Generador de excusas

const who = ["El perro", "Mi abuela", "El cartero", "Mi profesor", "Mi loro"];
const action = ["se comió", "mojó", "rompió", "perdió", "secuestró"];
const what = ["mi tarea", "mi teléfono", "mi coche", "la presentación", "mi sandwich"];
const when = ["antes de clase", "mientras dormía", "en el recreo", "durante la cena", "cuando llovía"];

// Devuelve un elemento aleatorio de un array
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Genera una excusa concatenando un elemento de cada array
function generateExcuse() {
  return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
}

// Cuando la página carga, genera una excusa y la muestra en el <p id="excuse">
window.onload = () => {
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerText = generateExcuse();

  // También genera una nueva al hacer clic en el botón
  const newButton = document.getElementById("new");
  newButton.onclick = () => {
    excuseElement.innerText = generateExcuse();
  };
};

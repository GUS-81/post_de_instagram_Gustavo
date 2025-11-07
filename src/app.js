

const who = ["El perro", "Mi abuela", "El cartero", "Mi profesor", "Mi loro"];
const action = ["se comió", "mojó", "rompió", "perdió", "secuestró"];
const what = ["mi tarea", "mi teléfono", "mi coche", "la presentación", "mi sandwich"];
const when = ["antes de clase", "mientras dormía", "en el recreo", "durante la cena", "cuando llovía"];


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function generateExcuse() {
  return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
}


window.onload = () => {
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerText = generateExcuse();


  const newButton = document.getElementById("new");
  newButton.onclick = () => {
    excuseElement.innerText = generateExcuse();
  };
};

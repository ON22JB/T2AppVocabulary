//Fullscreen Button
const fullScBtn = document.querySelector("#fullScBtn") as HTMLButtonElement;

//Open fullscreen
let elem = document.documentElement as HTMLElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } 
}

//print the vocabulary list table
let printBtn = document.querySelector("#printBtn") as HTMLButtonElement;
function print() {
  window.print();
}
printBtn.addEventListener("click", print);

export {openFullscreen, fullScBtn};
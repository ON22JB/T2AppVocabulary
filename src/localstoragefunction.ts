//Save and Reset buttons
const saveBtn = document.querySelector("#saveBtn") as HTMLButtonElement;
const resetBtn = document.querySelector("#resetBtn") as HTMLButtonElement;

//start of En functions
let textEn = document.getElementById('vocabEnContainer');
if (textEn){
  let myDataEn;
let postDataEn = window.localStorage.getItem("save");
if (postDataEn == null || postDataEn == '') {
  myDataEn = textEn.innerHTML;
    window.localStorage.setItem("save", myDataEn);
} else {
    textEn.innerHTML = postDataEn;
}}

//save En Vocab List on reload of page
function saveChangesEn() {
    let textEn = document.getElementById('vocabEnContainer');
    let myDataEn;
    if (textEn){
      myDataEn = textEn.innerHTML;
    window.localStorage.setItem("save", myDataEn);
    }
}

//clear local storage En
function clearStorageEn() {
  let textEn = document.getElementById('vocabEnContainer');
  if (textEn){
  let reset = textEn.innerHTML;
  window.localStorage.clear();
  textEn.innerHTML = reset;
}}

//start of De functions
let textDe = document.getElementById('vocabDeContainer');
if (textDe){
let myDataDe;
let postDataDe = window.localStorage.getItem("save");
if (postDataDe == null || postDataDe == '') {
myDataDe = textDe.innerHTML;
  window.localStorage.setItem("save", myDataDe);
} else {
  textDe.innerHTML = postDataDe;
}}

//save De Vocab List on reload of page
function saveChangesDe() {
    let textDe = document.getElementById('vocabDeContainer');
    let myDataDe;
    if (textDe){
      myDataDe = textDe.innerHTML;
    window.localStorage.setItem("save", myDataDe);
    }
}

//clear local storage De
function clearStorageDe() {
let textDe = document.getElementById('vocabDeContainer');
if (textDe){
let reset = textDe.innerHTML;
window.localStorage.clear();
textDe.innerHTML = reset;
}}

export{saveChangesEn, saveChangesDe, clearStorageDe, clearStorageEn, saveBtn, resetBtn};
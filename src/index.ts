import { validateInput } from "./validate";
import { genUniqueId } from "./generateid";

//Explanation:
//"En" for English
//"De" for German

//Adding new Vocabulary
const newVocabEnInput = document.querySelector("#newVocabEnInput") as HTMLInputElement; 
const newVocabDeInput = document.querySelector("#newVocabDeInput") as HTMLInputElement;
const newVocabBtn = document.querySelector("#newVocabBtn") as HTMLButtonElement;

//Check if correct input or not with message
const validatorMessage = document.querySelector("#validatorMessage") as HTMLSpanElement;

//Container to show Vocabulary list
const vocabEnContainer = document.querySelector("#vocabEnContainer") as HTMLDivElement;
const vocabDeContainer = document.querySelector("#vocabDeContainer") as HTMLDivElement;

//Button to clear list
const emptyVocabBtn = document.querySelector("#emptyVocabBtn") as HTMLButtonElement;

//Fullscreen Button
const fullScBtn = document.querySelector("#fullScBtn") as HTMLButtonElement;

//Information to save inside of each Vocabulary (En & De)
interface VocabEn {
  description: string; //the word
  id: string; //randomized ID
}
interface VocabDe {
  description: string;
  id: string;
}
  
let vocabEn: VocabEn[] = [];
let vocabDe: VocabDe[] = [];

//Add new Vocabulary (En) 
function addVocabEn() {
    //if input not correct:
    if (!validateInput()) {
      return; 
    }
    const newVocabEn: VocabEn = {
      description: newVocabEnInput.value, 
      id: genUniqueId(),
    };
    vocabEn.push(newVocabEn);
  
    reloadVocabEn();
    addVocabDe();
    newVocabEnInput.value = "";
  }
  //Add new Vocabulary (De)
  function addVocabDe() {
    //if input not correct:
    if (!validateInput()) {
      return; 
    }
    const newVocabDe: VocabDe = {
      description: newVocabDeInput.value,
      id: genUniqueId(),
    };
    vocabDe.push(newVocabDe);
    reloadVocabDe();
    newVocabDeInput.value = "";
  }
  
  //Empty Vocabulary List, Create Container for Vocabulary (En)
function reloadVocabEn() {
    vocabEnContainer.innerHTML = "";
    vocabEn.forEach((vocabEn) => {
        const oneVocabEnContainer = document.createElement("div");
        oneVocabEnContainer.id = vocabEn.id;
        oneVocabEnContainer.innerHTML = vocabEn.description;
        vocabEnContainer.appendChild(oneVocabEnContainer);
      });}
  
  //Empty Vocabulary List, Create Container for Vocabulary (De)
      function reloadVocabDe() {
        vocabDeContainer.innerHTML = "";
      vocabDe.forEach((vocabDe) => {
        const oneVocabDeContainer = document.createElement("div");
        oneVocabDeContainer.id = vocabDe.id;
        oneVocabDeContainer.innerHTML = vocabDe.description;
        vocabDeContainer.appendChild(oneVocabDeContainer);
      });
  }

  function enterKeyOnVocabInput(e: KeyboardEvent) {
    if (e.key === "Enter") {
      addVocabEn();
      addVocabDe(); 
    }
  }

  //Clear whole List
  function emptyVocabList(){
    vocabEnContainer.innerHTML="";
    vocabDeContainer.innerHTML="";
    newVocabEnInput.innerHTML = "";
    newVocabDeInput.innerHTML = "";
    newVocabEnInput.value = "";
    newVocabDeInput.value = "";
    while(vocabEn.length){
      vocabEn.pop();
    }
    while(vocabDe.length){
      vocabDe.pop();
    }
  }

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
    emptyVocabList();
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

//main function
function initApp() {
    newVocabBtn.disabled = true;
    newVocabBtn.addEventListener("click", addVocabEn);
    emptyVocabBtn.disabled = true;
    newVocabEnInput.addEventListener("input", validateInput);
    newVocabDeInput.addEventListener("input", validateInput);
    newVocabEnInput.addEventListener("keydown", enterKeyOnVocabInput);
    newVocabDeInput.addEventListener("keydown", enterKeyOnVocabInput);
    emptyVocabBtn.addEventListener("click", emptyVocabList);
    fullScBtn.addEventListener("click", openFullscreen);
    saveBtn.addEventListener("click", saveChangesEn);
    saveBtn.addEventListener("click", saveChangesDe);
    resetBtn.addEventListener("click", clearStorageEn);
    resetBtn.addEventListener("click", clearStorageDe);
  }
  
  initApp();

  export { newVocabEnInput,newVocabBtn, newVocabDeInput, emptyVocabBtn, validatorMessage}
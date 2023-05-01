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

//Generating Unique ID
function genUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); 
    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8);
  
    return `${dateStr}-${randomStr}`;
  }

//Check if input field has an input 
function validateInput() {
    if (!newVocabEnInput.value) {
        newVocabBtn.disabled = true;
      setValidatorMessage(ValidatorMessages.noinput, true);
      return false;
    }
    if (!newVocabDeInput.value) {
        newVocabBtn.disabled = true;
      setValidatorMessage(ValidatorMessages.noinput, true);
      return false;
    }
    else {
        newVocabBtn.disabled = false;
        emptyVocabBtn.disabled = false;
      setValidatorMessage(ValidatorMessages.validinput);
      return true;
    }
  }
  
  //Messages for User after the check of input (write blue text)
  function setValidatorMessage(message: string, error = false) {
    validatorMessage.innerHTML = message;
      validatorMessage.style.color = "black";
  }
  const ValidatorMessages = {
    noinput: "Es fehlen noch Eingaben :) ",
    validinput: "Drücke 'Hinzufügen' oder Enter um deine Eingabe zu bestätigen! Mit 'Liste leeren' entfernst du alle Einträge. ",
  };

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
    //sorting Vocabulary
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
    while(vocabEn.length){
      vocabEn.pop();
    }
    while(vocabDe.length){
      vocabDe.pop();
    }
  }

  //Delete Vocab pairs
  //Here is space for new function to delete single vocab entrees
  
  function changeOnClick() {
    console.log("test");
    vocabDe.forEach((vocabDe) => {
    const oneVocabDeContainer = document.createElement("div");
    oneVocabDeContainer.innerHTML = "";
    oneVocabDeContainer.style.backgroundColor = "red";
    })
  } 

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
    vocabDeContainer.addEventListener("click", changeOnClick);
  }
  
  initApp();
import { validateInput } from "./validate";
import { genUniqueId } from "./generateid";
import { saveChangesEn, saveChangesDe, clearStorageDe, clearStorageEn,  saveBtn, resetBtn } from "./localstoragefunction";
import { openFullscreen, fullScBtn } from "./features";

//Explanation:
//"En" for English
//"De" for German

//Adding new Vocabulary
const newVocabEnInput = document.querySelector("#newVocabEnInput") as HTMLInputElement; 
const newVocabDeInput = document.querySelector("#newVocabDeInput") as HTMLInputElement;
const newVocabBtn = document.querySelector("#newVocabBtn") as HTMLButtonElement;

//Container to show Vocabulary list
const vocabEnContainer = document.querySelector("#vocabEnContainer") as HTMLDivElement;
const vocabDeContainer = document.querySelector("#vocabDeContainer") as HTMLDivElement;

//Button to clear list
const emptyVocabBtn = document.querySelector("#emptyVocabBtn") as HTMLButtonElement;

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

  export { newVocabEnInput,newVocabBtn, newVocabDeInput, emptyVocabBtn}
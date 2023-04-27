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
      setValidatorMessage(ValidatorMessages.validinput);
      return true;
    }
  }
  
  
  //Messages for User after the check of input (write blue text)
  function setValidatorMessage(message: string, error = false) {
    validatorMessage.innerHTML = message;
      validatorMessage.style.color = "blue";
  }
  const ValidatorMessages = {
    noinput: "Es fehlen noch Eingaben :) ",
    validinput: "Drücke den Knopf oder Enter um deine Eingabe zu bestätigen!",
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
  
    addVocabDe();
    newVocabEnInput.value = "";
  }
  //Add new Vocabulary (De)
  function addVocabDe() {
    //if input not correct:
    if (!validateInput()) {
      return; 
    }
    const timestamp = new Date();
    const newVocabDe: VocabDe = {
      description: newVocabDeInput.value,
      id: genUniqueId(),
    };
    vocabDe.push(newVocabDe);
    newVocabDeInput.value = "";
  }
  

//main function
function initApp() {
    newVocabBtn.disabled = true;
    newVocabBtn.addEventListener("click", addVocabEn);
    newVocabEnInput.addEventListener("input", validateInput);
    newVocabDeInput.addEventListener("input", validateInput);
    
  }
  
  initApp();
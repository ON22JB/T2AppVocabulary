import { newVocabEnInput ,newVocabBtn, newVocabDeInput, emptyVocabBtn, validatorMessage} from "./index";

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

  export {validateInput};
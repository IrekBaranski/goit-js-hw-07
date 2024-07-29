//wprowadzania tekstu do inputu input#name-input (zdarzenie input) podstawia jego bieżącą wartość do span#name-output jako imię do powitania.
// id input#name-input i span#name-output zasilane z EventListener

const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

inputField.addEventListener("input", writeAndErase);

function writeAndErase(event) {
  const formName = event.currentTarget.value.trim();
  if (formName !== "") {
    outputField.textContent = formName;
  }
}
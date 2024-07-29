

// skrypt do zarządzania formularzem logowania
//wysyłanie form.login-form -> poprzez zdarzenie submit.
//Podczas wysyłania formularza strona nie powinna być przeładowywana.
//podczas submit: 
//w formularzu są nieuzupełnione pola, -> wyświetl alert z komunikatem 'All form fields must be filled in'
//Nie ma atrybutu required do inputów, walidacja za pomocą JS.

//Jeśli użytkownik wypełnił wszystkie pola i wysłał formularz, zbierz wartości pól do obiektu z dwoma właściwościami, gdzie kluczem jest nazwa inputów, a wartością są odpowiednie wartości tych inputów, oczyszczone z białych znaków na krawędziach. 
//Do uzyskania dostępu do elementów formularza użyj właściwości elements.
//Przy submit formularza wypisz obiekt z wprowadzonymi danymi w konsoli i zresetuj wartości pól formularza za pomocą metody reset.


const form = document.querySelector("form");
form.addEventListener("submit", submitDone);

function submitDone(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
  } else if (
    event.target.elements.email.value.trim() !== "" ||
    event.target.elements.password.value !== ""
  ) {
    console.log("Submit done!");
    console.log({
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    });
  }
  form.reset();
}
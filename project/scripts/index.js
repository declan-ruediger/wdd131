const mailingListForm = document.querySelector("#mailing-list-form");

mailingListForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = document.querySelector("#email-input");

    let emailAddress = emailInput.value;

    let signUpButton = document.querySelector("#email-signup-button");

    signUpButton.textContent = `Success! You're signed up at ${emailAddress}`;
});
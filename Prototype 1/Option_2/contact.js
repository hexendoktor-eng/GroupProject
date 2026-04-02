const errorMessageElement = document.getElementById("error-message");
const errorMessageElement2 = document.getElementById("error-message2");
const successMessageArea = document.getElementById("success-message");


const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");

let fNameSuccess = false;
let lNameSuccess = false;

firstNameInput.addEventListener("input", function() {
    let firstName = firstNameInput.value;

    if (/\d/.test(firstName)) {
        errorMessageElement.textContent = "First Name has numbers in it, please retry"
    }
    else {
        errorMessageElement.textContent = "";
        fNameSuccess = true
    }

    });

lastNameInput.addEventListener("input", function()
{
    let lastName = lastNameInput.value;

    if (/\d/.test(lastName)){
        errorMessageElement2.textContent = "Last Name has numbers in it, please retry"
    }
    else {
        errorMessageElement2.textContent = "";
        lNameSuccess = true

    }
})
if ((fNameSuccess === true) || (lNameSuccess === true)) {
    successMessageArea.style.display = "block";

}

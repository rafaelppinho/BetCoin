const passwordInput = document.getElementById("password");
const passwordErrorMessage = document.getElementById("password-error");

passwordInput.addEventListener("blur", (e) => {
    if(passwordInput.value.length < 8) {
        passwordErrorMessage.style.display = "block";
        passwordInput.value = "";
        return;
    }

    passwordErrorMessage.style.display = "none";
});
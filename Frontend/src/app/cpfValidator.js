const cpfInput = document.getElementById("cpf");
const cpfErrorMessage = document.getElementById("cpf-error");

cpfInput.addEventListener("blur", e => {
    if(isNaN(cpfInput.value)) {
        cpfErrorMessage.style.display = "block";
        cpfInput.value = "";
        return;
    } 

    cpfErrorMessage.style.display = "none";
});


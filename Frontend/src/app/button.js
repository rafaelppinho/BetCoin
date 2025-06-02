const btnViewPassword = document.getElementById("btn-view-password");
const inputPassword = document.getElementById("password");
const image = btnViewPassword.children[0];
const selected = document.getElementById("TypeJogos");

btnViewPassword.addEventListener("click", (e) => {
    if (selected.value === "default") {
        e.preventDefault();
        alert("Por favor, selecione um tipo de jogo.");
        return;
    }
    if(inputPassword.type == "password") {
        inputPassword.type = "text";
        image.src = "../../public/images/mostrar-senha.png";
        
    } else {
        inputPassword.type = "password";
        image.src = "../../public/images/senha-escondida.png";
    }
})

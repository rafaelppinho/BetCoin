const form = document.getElementById("gameForm");
const selectGame = document.getElementById("TypeJogos");

form.addEventListener("submit", (e) => {
    if (selectGame.value === "default") {
        e.preventDefault();
        alert("Por favor, selecione um tipo de jogo.");
        return;
    }
});
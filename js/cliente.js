const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const cpf = document.querySelector("#cpf").value;
    const email = document.querySelector("#email").value;
    const birthday = document.querySelector("#birthday").value;

    const cliente = {
        nome: name,
        sobrenome: surname,
        cpf: cpf,
        email: email,
        dataNascimento: birthday
    }
    
    Post(cliente);
});

async function Post(cliente) {
    console.log(cliente);

    const url = "http://localhost:5013/cliente";
    const request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
        
    });

    if(!request.ok) {
        console.log("Deu erro");
    }

    const response = await request.json();

    console.log(response);  

    alert("Dados enviados");
}
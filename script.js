class Cliente {
    constructor(nome, email, idade, foto) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.foto = foto;
    }

    exibir() {
        return `${this.nome} - ${this.email} - ${this.idade} anos`;
    }
}

let clientes = [];

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const foto = document.getElementById('foto').files[0];

    if (!foto) {
        alert("adicione uma foto ao nosso cadastro");
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
        const novoCliente = new Cliente(nome, email, idade, reader.result);
        clientes.push(novoCliente);
        document.getElementById('formCadastro').reset();
        atualizarListaClientes();
    };
    reader.readAsDataURL(foto);
});

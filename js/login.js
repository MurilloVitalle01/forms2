/* Criando evento botão */
document.getElementById('botaoEntrar')
    .addEventListener('click', (e) => {
        e.preventDefault();
    })

document.getElementById('botaoCadastro')
    .addEventListener('click', (e) => {
        e.preventDefault
        window.open("../assets/cadastroUser.html")
    });

function verificar() {
    let email = document.getElementById('username').value
    let senha = document.getElementById('password').value

    if (email == "" || senha == "") {
        alert("Obrigatório preenchimento de todos os campos")
        document.getElementById("username").focus();
    } else {
        consultar(email, senha);
    }
};

function consultar(email, senha) {
    let usuarios = new Array();//Aqui estamos definindo uma matriz

    //Verificando se a chave usuarios existe no local 
    if (localStorage.hasOwmProperty('usuarios')) {
        //Recuperar os valores da propiedade usuarios do localStorage
        //Convertendo o USUARIOS em objetos para podermos usar as propiedades;

        usuarios = JSON.parse(localStorage.getItem('usuarios'))

    }

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email == email && usuarios[i].senha == senha) {
            window.open("../assets/index.html")
            window.close();
            break;
        }
    }
    alert("Email ou Senha invalidos");
    document.getElementById('username').focus;
}


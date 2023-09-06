let email = document.getElementById('email');
let senha = document.getElementById('senha');


//Criando eventos dos botões
document.getElementById('botaoLogin')
    .addEventListener('click', (e) => {
        e.preventDefault();
        window.open('../login.html');
        window.close();

    }
    );
document.getElementById('botaoCad')
    .addEventListener('click', (e) => {
        e.preventDefault();

        if (email.value !== "" || senha.value !== "") {
            cadastro()
        } else {
            alert("Preencha o email e senha");
            email.focus();
        }
    }
    );

//Criando CRUD no Storage

// Create - Cadastrar
function cadastro() {

    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    let usuarios = new Array();

    //verificando se existe USUARIOS no Storage
    if (localStorage.hasOwnProperty('usuarios')) {
        //Reuperar os valores da chave Usuarios
        //Convertendo a chave USUARIOS em objeto
        usuarios = JSON.parse(localStorage.getItem('usuarios'));

    }
    
    //adicionar um novo usuário no Storage
  
    email = email.value;
    senha = senha.value;
    
    usuarios.push({email,senha });

    //convertendo para String 
   localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!!!");
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('email').focus();


}

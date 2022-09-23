



let novoUsuario = [
    "   higor", "teste@teste", "123"
]
// CADASTRO
function cadastrar() {
   let nome =  form.nome.value
   let email =  form.email.value
   let senha =  form.senha.value
   let confSenha =  form.confSenha.value



    if (!nome) {
        alert("Por favor insira seu nome")
    } else if (!email) {
        alert("Por favor insira seu email")
    } else if (!senha) {
        alert("Por favor insira sua senha")
    } else if (senha != confSenha) {
        alert("As senhas não são iguais")
    } else if (nome && email && senha == confSenha) {
        alert("Você foi cadastrado")
    }
    console.log(nome);
    console.log(email);
    console.log(senha);
    console.log(confSenha);
    console.log(form);

    // if (!postUsuario[0].value) {
    //     alert("Por favor insira seu nome")
    // } else if (!postUsuario[1].value) {
    //     alert("Por favor insira seu email")
    // } else if (!postUsuario[2].value) {
    //     alert("Por favor insira sua senha")
    // } else if (postUsuario[2].value != postUsuario[3].value) {
    //     alert("As senhas não são iguais")
    // } else if (postUsuario[0].value && postUsuario[2].value == postUsuario[3].value) {
    //     usuario = [
    //         postUsuario[0].value, postUsuario[1].value, postUsuario[2].value, postUsuario[3].value
    //     ]
    //     console.log(novoUsuario);
    //     alert("Você foi cadastrado", postUsuario)
    // }
    // console.log(postUsuario[0].value);
}


function inserir() {
    const table = document.getElementsByTagName('table');
    if (!table) {
        // let novaTabela = document.createElement('table');
        alert('Criar Tabela');
    } else {
        alert('Tabela Existente');

    }

    // let inserirlinha = (tabela.innerHTML = " <td></td>");



    console.log(table);



}










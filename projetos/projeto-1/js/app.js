



let novoUsuario = [
    "higor", "teste@teste", "123"
]
// CADASTRO
function cadastrar() {
    let nome = form.nome.value
    let email = form.email.value
    let senha = form.senha.value
    let confSenha = form.confSenha.value



    if (!nome) {
        let header = document.getElementById('alertHeader')
        let body = document.getElementById('alertBody')
        let btn = document.getElementById('closeAlert')

        header.textContent = "Está faltando o nome..."
        body.textContent = "Não da para te cadastrar se nao soubermos seu nome."
        btn.textContent = "Esqueci, vou colocar!"

    } else if (!email) {
        let header = document.getElementById('alertHeader')
        let body = document.getElementById('alertBody')
        let btn = document.getElementById('closeAlert')

        header.textContent = "Está faltando o Email..."
        body.textContent = "Tem que preencher todos os campos, inclusive seu Email."
        btn.textContent = "Etcha, Esqueci"    
    } else if (!senha) {
        let header = document.getElementById('alertHeader')
        let body = document.getElementById('alertBody')
        let btn = document.getElementById('closeAlert')

        header.textContent = "Está faltando o senha..."
        body.textContent = "Para a asegurança das suas informações você deve colocar uma senha"
        btn.textContent = "Desculpe, irei colocar"  
    } else if (senha != confSenha) {
        let header = document.getElementById('alertHeader')
        let body = document.getElementById('alertBody')
        let btn = document.getElementById('closeAlert')

        header.textContent = "Algo esta errado"
        body.textContent = "Parece que as senhas nao batem"
        btn.textContent = "Vou refazer!"
        } else if (nome && email && senha == confSenha) {

            let header = document.getElementById('alertHeader')
            let body = document.getElementById('alertBody')
            let btn = document.getElementById('closeAlert')
    
            header.textContent = "Maravilha"
            body.textContent = "Agora você esta cadastrado"
            btn.textContent = "Show"

        let tBody = document.getElementById('body')

        let usuarioLinha = document.createElement('tr');
        let nomeColuna = document.createElement('td');
        let emailColuna = document.createElement('td');
        let senhaColuna = document.createElement('td');

        nomeColuna.textContent = nome
        emailColuna.textContent = email
        senhaColuna.textContent = senha

        usuarioLinha.appendChild(nomeColuna);
        usuarioLinha.appendChild(emailColuna);
        usuarioLinha.appendChild(senhaColuna);

        tBody.appendChild(usuarioLinha);

        tBody.nome    }
    let body = document.getElementById('body');


    console.log(body.children);


    // console.log(usuarioLinha);


}




function pegueiTbody() {
    let td = document.getElementsByTagName('td');

    console.log(td);
}







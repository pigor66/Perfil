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
        btn.textContent = "Quero fazer meu login"


        localStorage.setItem("nome", nome)
        localStorage.setItem("email", email)
        localStorage.setItem("senha", senha)

        btn.addEventListener('click', function reload() {
            window.location.reload()
            localStorage.setItem("nome", nome)
            localStorage.setItem("email", email)
            localStorage.setItem("senha", senha)

        })
    }
};

function entrar() {
    let localNome = localStorage.getItem("nome")
    let localEmail = localStorage.getItem("email")
    let localSenha = localStorage.getItem("senha")

    let login = formLogin.nomeLogin.value
    let senhaLogin = formLogin.senhaLogin.value

    if (login == localNome || login == localEmail && senhaLogin == localSenha) {

        window.location.href = "https://dreamdeveloper.netlify.app/projetos/projeto-1/pages/success.html"

    } else {
        let header = document.getElementById('loginHeader')
        let body = document.getElementById('loginBody')
        let btn = document.getElementById('loginClose')

        header.textContent = "Algo deu errado..."
        body.textContent = "Faça seu cadastro ou confira seu Login e Senha"
        btn.textContent = "Tentar outra vez"

    }
}


function mostarDados() {
    let localNome = localStorage.getItem("nome")
    let localEmail = localStorage.getItem("email")
    let localSenha = localStorage.getItem("senha")

    let pageInfoNome = document.getElementById('localNome')
    let pageInfoEmail = document.getElementById('localEmail')
    let pageInfoSenha = document.getElementById('localSenha')

    let InfoNome = document.getElementById('pageNome')
    let InfoEmail = document.getElementById('pageEmail')
    let InfoSenha = document.getElementById('pageSenha')

    InfoNome.textContent = 'Nome: '
    InfoEmail.textContent = 'Email: '
    InfoSenha.textContent = 'Senha: '

    pageInfoNome.textContent = localNome
    pageInfoEmail.textContent = localEmail
    pageInfoSenha.textContent = localSenha
    console.log(pageInfoNome);
}

function restart() {
    localStorage.clear();
}

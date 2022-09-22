



let usuario = [
    "higor", "teste@teste","123"
]
// CADASTRO
function cadastrar(nome, email, senha, confSenha) {    
    let postUsuario = [
        nome,email,senha,confSenha
    ]
    if(!postUsuario[0].value){
        alert("Por favor insira seu nome")
    }else if(!postUsuario[1].value){
        alert("Por favor insira seu email")
    }else if(!postUsuario[2].value){
        alert("Por favor insira sua senha")
    }else if(postUsuario[2].value != postUsuario[3].value){
        alert("As senhas não são iguais")
    }else if(postUsuario[0].value && postUsuario[2].value == postUsuario[3].value){
        usuario = [
            postUsuario[0].value, postUsuario[1].value, postUsuario[2].value, postUsuario[3].value
        ]
        console.log(usuario);
        alert("Você foi cadastrado", postUsuario)
    }
}













let usuario = [
    "higor", "teste@teste","123"
]
// CADASTRO
function cadastrar(nome, email, senha, confSenha) {
    let dados = document.getElementById("dados")    
    
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
        alert("Você foi cadastrado")
    }
}

function inserir(){
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = usuario[0];
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = usuario[1];
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = usuario[2];
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
console.log(criarUsuario);
}







let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(nome);
        console.log(listaDeAmigos);
        limparCampo();
        exibirListaDeAmigos();
        listaDeAmigos
    }
}

function exibirListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function sortearAmigo() {
    if (listaDeAmigos == '') {
        alert('Por favor, insira um nome.')
    } else {
        const indiceDoGanhador = Math.floor(Math.random() * listaDeAmigos.length);
        let ganhador = document.getElementById('resultado');
        ganhador.innerHTML = `O amigo secreto sorteado é: ${listaDeAmigos[indiceDoGanhador]}`
    }
}
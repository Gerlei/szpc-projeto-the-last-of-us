/*
    OBJETIVO - Quando clicarmos no botão será mostrado a imagem de fundo correspondente

    Passo 1 - Pegar os elementos HTML referente aos botões

    Passo 2 - Identificar o clique do usuário no botão

    Passo 3 - Desmarcar o botão selecionado atualemente

    Passo 4 - Marcar o novo botão clicado como selecionado

    Passo 5 - Esconder a imagem ativa

    Passo 6 - Mostrar a imagem referente ao botão selecionado
*/

// console.log('batata');
// console.log(document);

// Passo 1 - Pegar os elementos HTML referente aos botões
const botoesCarrossel = document.querySelectorAll('.botao');
// console.log(botoesCarrossel);
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - Identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indiceBotao) => {
    botao.addEventListener('click', () => {

        desmarcarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemSelecionada(indiceBotao);
    })
})

function mostrarImagemSelecionada(indiceBotao) {
    imagens[indiceBotao].classList.add('imagem-ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('botao-selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.imagem-ativa');
    imagemAtiva.classList.remove('imagem-ativa');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao-selecionado');
    botaoSelecionado.classList.remove('botao-selecionado');
}

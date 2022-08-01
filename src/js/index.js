const botaoAlarme = document.getElementById('botao-alarme');
const botaoAvancar = document.getElementById('botao-avancar');
const botaoVoltar = document.getElementById('botao-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartaoSelecionado(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

botaoAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1){
        cartaoAtual = [0]
        cartaoAtual--
    }
})

botaoVoltar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -4){
        cartaoAtual = [3]
        cartaoAtual++
    }
})

botaoAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1) return
    esconderCartaoSelecionado()
    cartaoAtual++;
    mostrarCartaoSelecionado(cartaoAtual)
});

botaoVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return
    esconderCartaoSelecionado()
    cartaoAtual--;
    mostrarCartaoSelecionado(cartaoAtual)
});

botaoAlarme.addEventListener('click', function(){
    alert('Os xerifes já foram acionados. Agradecemos sua ajuda.');
});
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClick = document.getElementById(`game-${id}`);
    let imagemClick = gameClick.querySelector('.dashboard__item__img');
    let botaoClick = gameClick.querySelector('.dashboard__item__button');

    if (botaoClick.classList.contains('dashboard__item__button--return') && imagemClick.classList.contains('dashboard__item__img--rented')){
        imagemClick.classList.remove('dashboard__item__img--rented');
        botaoClick.classList.remove('dashboard__item__button--return');
        botaoClick.textContent = 'Alugar';
        alert('O jogo foi devolvido');
    } else {
        imagemClick.classList.add('dashboard__item__img--rented');
        botaoClick.classList.add('dashboard__item__button--return');
        botaoClick.textContent = 'Devolver';
        alert('O jogo foi alugado');
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

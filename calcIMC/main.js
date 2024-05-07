
function calcIMC() {
    const container = document.querySelector('.container')
    const form = document.querySelector('.form')
    const peso = form.querySelector('#input-teste-1')
    const altura = form.querySelector('#input-teste-2')
    const resultado = container.querySelector('.resultado')

    const corVerde = () => resultado.classList.add('verde')
    const corVermelho = () => resultado.classList.add('vermelho')
    const formula = () => peso.value / altura.value ** 2;

    function recebeEventoForm(evento) {
        evento.preventDefault();
        if (peso.value > 0 && altura.value > 0) {
    
            resultado.innerHTML = 
            formula() <  18.5 ? `Seu IMC é: ${formula().toFixed(2)} com Classificação: Abaixo do Peso` :
            formula() <= 24.9 ? `Seu IMC é: ${formula().toFixed(2)} com Classificação: Peso Normal` :
            formula() <= 29.9 ? `Seu IMC é: ${formula().toFixed(2)} com Classificação: Sobrepeso` :
            formula() <= 39.9 ? `Seu IMC é: ${formula().toFixed(2)} com Classificação: Obesidade` :
            formula() >= 40.0 ? `Seu IMC é: ${formula().toFixed(2)} com Classificação: Obesidade Grave` : ''
        }
        
        if (formula() < 25) { corVerde() } else { corVermelho() }
    }
    form.addEventListener('submit', recebeEventoForm);
}

function refreshPage() {
    location.reload();
}

calcIMC();
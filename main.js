const valorA = document.getElementById('campoa');
const valorB = document.getElementById('campob');
const form = document.getElementById('meuFormulario');
const mensagemSucesso = document.querySelector('.comparacao');
const mensagemFalha = document.querySelector('.comparacao');

function validaValor(a, b){
    return a < b;
}

form.addEventListener('submit', function(e) {
    let valorEValido = false;
    e.preventDefault();
    
    const falha  = "Essa comparação não é aceita";
    const sucesso = "Parabéns essa comparação é válida";

    valorEValido = validaValor(valorA.value, valorB.value);
    if(valorEValido){
        mensagemSucesso.innerHTML = sucesso;
        mensagemSucesso.style.display = 'block';
        mensagemFalha.style.backgroundColor = 'green';
        valorA.value = '';
        valorB.value = '';
    }else{
        mensagemFalha.innerHTML = falha;
        mensagemFalha.style.backgroundColor = 'red';
        mensagemSucesso.style.display = 'block';
        valorA.value = '';
        valorB.value = '';
    }
});



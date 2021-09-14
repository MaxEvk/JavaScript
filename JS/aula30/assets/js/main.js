
const data = new Date();
const texto = document.querySelector('.container');

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

texto.innerHTML = data.toLocaleString ('pt-BR', opcoes);
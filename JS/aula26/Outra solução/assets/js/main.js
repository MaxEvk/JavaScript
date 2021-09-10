const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = peso / altura ** 2;

    const mensagemUsuário = `Seu IMC é ${imc.toFixed(2)} (${getNivelImc(imc)}).`;

    if (!peso == true) {

        console.log('Peso inválido!');
        document.querySelector('.resultado').innerText = 'Peso inválido!';

    } else if (!altura == true) {
        
        console.log('Altura inválida!');
        document.querySelector('.resultado').innerText = 'Altura inválida!';

    } else {
        console.log(mensagemUsuário);
        document.querySelector('.resultado').innerText = mensagemUsuário;
    }
});

function getNivelImc(imc) {

    const nivel = ['Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'];
    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
}

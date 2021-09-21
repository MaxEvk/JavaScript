const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    //Quando passar pelo número 2 o continue faz pular pra próxima iteração;
    if (numero === 2) {
        console.log('pulei o número 2');
        continue;
    }
    //Quando passar chegar até o número 6 o break para a iteração;
    if (numero === 7) {
        console.log('Saindo!');
        break;
    }

    console.log(numero);

}


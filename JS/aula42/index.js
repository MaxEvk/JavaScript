//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

//Solução padrão
function ePaisagem(largura, altura) {

    if( largura > altura){
        return true;
    } else {
        return false;
    }
}
console.log(ePaisagem(800, 150));

//Solução com arrow function
const ePaisagem2 = (largura, altura) => largura > altura? true : false;
console.log(ePaisagem(1920, 1080));
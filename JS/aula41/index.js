//Escreva uma function que receba dois números e retorne o maior deles.
/*n1 = prompt('Digite o primeiro número: ');
n2 = prompt('Digite o segundo número: ');*/

//Solução padrão
function numeros(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(numeros(1, 2));

//Outra solução com arrow function;
const max2 = (x, y) => x > y ? x : y;
console.log(max2(100, 150));
//Aritméticos + - / *
//+ soma e concatenação
//** = potenciação ex: 5 elevado a 10
// % resto da divisão. obs: resto inteiro é igual a zero
//Operadores tem precedência matemática, para que uma operação tenha precedência maior coloca- se a mesma entre parênteses 
/* Ordem de precedência 
1 -> () 
2 -> ** 
3 -> * / % 
4 -> + - 
E se for a mesma é da esquerda para a direita*/
// ++ = incremento
// -- = decremento
//operador de atribuição ( += )

let contador = 0;
contador += 2;// O mesmo que contador = contador + 2;
contador += 2;
contador += 2;
console.log(contador);
//NaN - Not a number. Conversão parseInt(inteiro), Conversão parseFloat(Decimal)
const num1 = 10;
const num2 = parseInt('5');//conversão de string para number
const num3 = parseFloat('5.2');//conversão de string para ponto flutuante
console.log(num1 + num2);
console.log(typeof num2);

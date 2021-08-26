let num1, num2;

num1 = prompt('Digite um número');
num2 = prompt('Digite outro número');

const resultado = parseInt(num1) + parseInt(num2);//maneira correta
/*let resultado = num1 + num2; Dessa forma o retorno dos dois valores serão contatenados e não somados, pois tudo que o usuário digita é retornado como string, a solução é fazer a conversão de string para number */

alert('O resultado da soma foi : ' + resultado);
console.log('O resultado da soma foi: ' + resultado);
alert(`O resultado da soma foi: ${resultado}`);//templete string
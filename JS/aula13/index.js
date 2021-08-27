//Imprimir apenas um indice da string
let umaString = 'Um texto';

console.log(umaString[6]);//imprime um indice da string
console.log(umaString.indexOf('texto'));//index que começa a palavra
console.log(umaString.match(/[a-z]/g));//busca e imprime todas as letras minusculas da string. Estudar - Expressões regulares.
console.log(umaString.search(/x/));//retorna o indice e aceita expressoes regulares
console.log(umaString.replace('Um', 'Outra'));//Substitue uma palavra de uma string
console.log(umaString.length);//Retorna com o tamanho da string
console.log(umaString.slice(0, 2));//Retorna uma string dentro de dois indices, incial e final: ex: (0, 2) ou (3);
console.log(umaString.split(' '));//Divide uma string como retorno
console.log(umaString.toUpperCase());//Retorna a string com todas as letras maiusculas
console.log(umaString.toLowerCase());//Retorna com todas as letras minusculas

/*const frutas = ['Pera', 'Maçã', 'Uva'];
//for in lê os itens ou chaves do objeto
for (let index in frutas) {
    console.log(frutas[index]);
}*/

const pessoa = {
    nome: 'Max',
    sobrenome: 'Lima',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
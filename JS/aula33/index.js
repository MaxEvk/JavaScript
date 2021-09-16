const pessoa = {
    nome: 'Max',
    sobrenome: 'Lima',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//atribuição via desestruturação
//Operador de rest ... retorna o restante do objeto
const { nome, sobrenome, idade, endereco: {rua}, ...resto } = pessoa;
console.log(nome, sobrenome, rua, resto);
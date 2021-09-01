const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}; //mantem a copia com o mesmo valor

a.nome = 'Max';
console.log(a);
console.log(b);
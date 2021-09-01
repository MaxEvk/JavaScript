const pessoa = {
    nome: 'Max',
    sobrenome: 'Lima',
    idade: 39,

    fala () {
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();



/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}
const pessoa1 = criaPessoa('Max', 'Enon', 39);
const pessoa2 = criaPessoa('Gabriel', 'Lima', 17);
const pessoa3 = criaPessoa('David', 'Laurindo', 32);
const pessoa4 = criaPessoa('João', 'Oliveira', 55);
const pessoa5 = criaPessoa('Antônio', 'Marques', 47);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);*/

/*const pessoa = {
    nome: 'Max',
    sobrenome: 'Lima',
    idade: 39
}
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);*/
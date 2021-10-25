function retornaNome(nome) {
    return function(){
        return nome;
    };  
}

const funcao = retornaNome('Max');
const funcao2 = retornaNome('Vera');
//console.dir(funcao);
//console.dir(funcao2);

console.log(funcao(), funcao2());
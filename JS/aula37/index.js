const nome = ['Max', 'Lima', 'Amaro'];
//for clássico = geralmente com iteráveis (arrays ou strings)
/*for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}*/
//for in - Retorna o indice ou chave (strings, arrays ou objetos)
/*for (let i in nome) {
    console.log(nome[i]);
}*/
// for of = Retona o valor em si (Iteráveis, arrays ou strings)
/*for(let i of nome){
    console.log(i);
}*/
//Method ForEach retorna valor e indice
nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});
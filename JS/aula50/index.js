/*function funcao() {
    //arguments é uma palavra reservada que contém todos os argumentos da função. Somente quando está em uma function.
    console.log(arguments);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);*/

const conta = (...args) => {
    console.log(args);
}
conta('+', 1, 20, 30, 40, 50);
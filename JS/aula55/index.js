//IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Lima';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Max'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(39, 88, 1.68);//Invoca a função imediatamente  
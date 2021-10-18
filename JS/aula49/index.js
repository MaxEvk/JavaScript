// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi!');
}

// Firt-class objects
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}
souUmDado();

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
}
arrowFunction();

// Dentro do objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();
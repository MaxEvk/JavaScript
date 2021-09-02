function meuEscopo() {
    const form = document.querySelector('.form');// select form
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();//evita atualizar a página

        const nome = document.querySelector('.nome');//seleciona a classe dentro do documento
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);//retorna pessoas pro console

        resultado.innerHTML += (`<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`);//Escreve no corpo do documento os valores digitados no formulário
        
    }
    //addEventListener é um método que adiciona um escutador de evento que está no parâmetro, neste caso 'submit', e a função recebeEventoForm
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
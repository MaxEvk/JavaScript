const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');//Cria um elemento lista
    return li;
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoapagar = document.createElement('button');//Criando mais um button
    botaoapagar.innerText = 'Apagar';//Adicionando o texto ao button
    //botaoapagar.classList.add('apagar');
    botaoapagar.setAttribute('class', 'apagar');//Adiciona e nomeia qualquer atributo, exemplos: classe, id, title, ao botão apagar.
    botaoapagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoapagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {//Capta a tecla enter quando pressionada
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = ' ';
    inputTarefa.focus();
};

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    console.log(inputTarefa.value);
    //Exibe o texto no console.
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    //Retorna o click a const el.
    const el = e.target;
    //Se o button com a classe apagar for clicada, irá remover o elemento pai. 
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    } 
});
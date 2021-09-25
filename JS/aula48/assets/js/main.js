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
    salvarTarefas();
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

document.addEventListener('click', function (e) {
    //Retorna o click a const el.
    const el = e.target;
    //Se o button com a classe apagar for clicada, irá remover o elemento pai. 
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas()
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        //Method para salvar o texto no array
        listaDeTarefas.push(tarefaTexto);
    }

    //method para converter o array em string para poder salvar no navegador localStorage
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
};
//Mantem as tarefas sempre salvas no navegador 
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
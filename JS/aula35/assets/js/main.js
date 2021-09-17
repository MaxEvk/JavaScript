const elementos = [
    { tag: 'div', texto: 'document.querySelector( )' },
    { tag: 'div', texto: 'document.createElement( )' },
    { tag: 'section', texto: 'div.appendChild( )' },
    { tag: 'footer', texto: '.innerText' }
];
//seleciona a classe container e atribui o valor a variável container
const container = document.querySelector('.container');
//cria a tag div dentro do html
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];//desestruturação 
    let tagCriada = document.createElement(tag);//Cria a tag contida no array elementos a cada iteração do laço
    tagCriada.innerText = texto;//adiciona o texto contido em no array elementos à tagCriada 
    div.appendChild(tagCriada);//adiciona a tagCriada na div
}
//adiciona a div inteira dentro do container
container.appendChild(div);
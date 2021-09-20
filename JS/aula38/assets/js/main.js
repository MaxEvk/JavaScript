//Exercício no browser
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');//selector all paragrafos in the div

const estilosBody = getComputedStyle(document.body);//pull the body style of the document
const backgroundColorBody = estilosBody.backgroundColor;//pull the background color of the document

console.log(backgroundColorBody);//returns what color is in the background of the document

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}
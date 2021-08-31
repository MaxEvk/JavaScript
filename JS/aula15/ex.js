const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto1.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto2.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto3.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto4.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto5.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto6.innerHTML = `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;
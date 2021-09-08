
    const form = document.querySelector('#form');// select form
    
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();
        console.log('Evento predefinido');
        setResultado('Olá mundo');
    });

    function setResultado(msg) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ' ';
        const p = document.createElement('p');
        p.innerHTML = 'Qualquer coisa';
        resultado.appendChild(p);
    }

    


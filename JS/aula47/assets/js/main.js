
function relogio() {
    function setSeconds(segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = setSeconds(segundos);
        }, 1000);
    }
    const relogio = document.querySelector('.relogio');
    const mostrador = document.querySelector('.mostrador');
    
    let segundos = 0;
    let timer;

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
            mostrador.innerHTML = 'Contagem iniciada';
        }

        if (elemento.classList.contains('zerar')) {
            segundos = 0;
            clearInterval(timer);
            relogio.innerHTML = ('00:00:00');
            mostrador.innerHTML = 'Contagem resetada';
            relogio.classList.remove('pausado');
        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
            mostrador.innerHTML = 'Contagem pausada';
        }
    });

}
relogio();


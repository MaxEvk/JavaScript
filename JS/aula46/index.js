function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){ //Retorna a função em um tempo determinado por milisegundos
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearTimeout(timer);//Para de executar a função em um tempo determinado por milisegundos
}, 3000);

setTimeout(function(){
    console.log('setTimeOut');
}, 5000);
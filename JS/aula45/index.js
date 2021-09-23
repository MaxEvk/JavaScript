
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //Tirar o PM ou AM da Hora
    });

}

try {//É executado quando não há erros
    const hora = retornaHora();
    console.log(hora);
} catch (e) { //É executado quando há erros
    //Tratar erro
    console.log('Formato errado');
} finally {//Sempre vai ser executado com ou sem erros
    console.log('Tenha um bom dia!');
}

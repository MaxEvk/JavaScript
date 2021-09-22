/*try {
    //É executado quando não há erros
} catch (e) {
    //É executado quando há erros
} finally {
    //Sempre vai ser executado com ou sem erros
}*/
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
        hour12: false
    });

}

try {
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //Tratar erro
    console.log('Formato errado');
} finally {
    console.log('Tenha um bom dia!');
}

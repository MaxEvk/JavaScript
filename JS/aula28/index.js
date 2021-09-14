/*const data = new Date('2020-09-13 14:52:59.100');
console.log('Dia', data.getDate());console.log('Mês', data.getMonth() + 1);console.log('Ano', data.getFullYear());console.log('Hora', data.getHours());console.log('Min', data.getMinutes());console.log('Seg', data.getSeconds());console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());console.log('Dia', data.toString());
//console.log(Date.now());*/
function zeroAEsquerda (n) {
    return n >= 10 ? n : `0${n}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
    const data = new Date();
    const dataBrasil = formataData(data);
    console.log(dataBrasil);

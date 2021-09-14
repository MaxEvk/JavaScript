const data = new Date('1987-04-24 00:00:00');
const diaSemana = data.getDay();

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;

    case 2:
        diaSemanaTexto = 'Terça';
        break;

    case 3:
        diaSemanaTexto = 'Quarta';
        break;

    case 4:
        diaSemanaTexto = 'Quinta';
        break;

    case 5:
        diaSemanaTexto = 'Sexta';
        break;

    case 6:
        diaSemanaTexto = 'Sábado';
        break;

}

console.log(diaSemana, diaSemanaTexto);
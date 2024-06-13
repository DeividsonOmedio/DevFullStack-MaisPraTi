const prompt = require('prompt-async');

async function lerHorarios() {
    await prompt.start();

    let horarios = [];

    for (let i = 0; i < 5; i++) {
        let horarioValido = false;
        let horario;

        while (!horarioValido) {
            const { horas, minutos, segundos } = await prompt.get(['horas', 'minutos', 'segundos']);

            const horasNum = parseInt(horas);
            const minutosNum = parseInt(minutos);
            const segundosNum = parseInt(segundos);

            if (horasNum >= 0 && horasNum < 24 && minutosNum >= 0 && minutosNum < 60 && segundosNum >= 0 && segundosNum < 60) {
                horario = `${horasNum < 10 ? '0' + horasNum : horasNum}.${minutosNum < 10 ? '0' + minutosNum : minutosNum}.${segundosNum < 10 ? '0' + segundosNum : segundosNum}`;
                horarioValido = true;
            } else {
                console.log("Horário inválido. Por favor, insira um horário válido no formato HH.MM.SS.");
            }
        }

        horarios.push(horario);
    }

    console.log("Os 5 horários fornecidos são:");
    console.log(horarios);
}

module.exports = lerHorarios;

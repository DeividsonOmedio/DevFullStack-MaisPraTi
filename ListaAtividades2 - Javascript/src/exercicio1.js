const prompt = require('prompt-async');

async function calcularPerdaDeVida() {
    await prompt.start();

    const { cigarrosPorDia } = await prompt.get(['cigarrosPorDia']);
    const { anosFumando } = await prompt.get(['anosFumando']);

    const cigarrosPorDiaNum = parseInt(cigarrosPorDia, 10);
    const anosFumandoNum = parseInt(anosFumando, 10);

    if (isNaN(cigarrosPorDiaNum) || isNaN(anosFumandoNum) || cigarrosPorDiaNum <= 0 || anosFumandoNum <= 0) {
        console.log("Por favor, insira valores válidos para os cigarros por dia e anos fumando.");
        return;
    }

    const totalCigarrosFumados = cigarrosPorDiaNum * anosFumandoNum * 365;

    const minutosPerdidos = totalCigarrosFumados * 10;

    const diasPerdidos = Math.floor(minutosPerdidos / 1440);
    const horasPerdidas = Math.floor((minutosPerdidos % 1440) / 60);
    const minutosRestantes = minutosPerdidos % 60;

    console.log(`Você perdeu aproximadamente ${diasPerdidos} dias, ${horasPerdidas} horas e ${minutosRestantes} minutos de vida devido ao fumo.`);
}

module.exports = calcularPerdaDeVida;
const prompt = require('prompt-async');

async function calcularPontosDinheiro() {
    await prompt.start();

    const { horasAtividade } = await prompt.get(['horasAtividade']);

    const horasAtividadeNum = parseFloat(horasAtividade);

    if (isNaN(horasAtividadeNum) || horasAtividadeNum < 0) {
        console.log("Por favor, insira um número válido de horas de atividade.");
        return;
    }

    let pontos;
    let dinheiro;

    if (horasAtividadeNum <= 10) {
        pontos = horasAtividadeNum * 2;
    } else if (horasAtividadeNum <= 20) {
        pontos = 10 * 2 + (horasAtividadeNum - 10) * 5;
    } else {
        pontos = 10 * 2 + 10 * 5 + (horasAtividadeNum - 20) * 10;
    }

    dinheiro = pontos * 0.05;

    console.log(`Você ganhou ${pontos} pontos.`);
    console.log(`Isso equivale a R$ ${dinheiro.toFixed(2)}.`);
}

module.exports = calcularPontosDinheiro;

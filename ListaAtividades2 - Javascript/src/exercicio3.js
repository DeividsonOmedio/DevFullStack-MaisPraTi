const prompt = require('prompt-async');

async function calcularPrecoPassagem() {
    await prompt.start();

    const { distancia } = await prompt.get(['distancia']);

    // Converte a entrada para número
    const distanciaNum = parseFloat(distancia);

    if (isNaN(distanciaNum) || distanciaNum <= 0) {
        console.log("Por favor, insira uma distância válida.");
        return;
    }

    let precoPassagem;
    if (distanciaNum <= 200) {
        precoPassagem = distanciaNum * 0.50;
    } else {
        precoPassagem = distanciaNum * 0.45;
    }

    console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}.`);
}

module.exports = calcularPrecoPassagem;

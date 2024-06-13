const prompt = require('prompt-async');

async function calcularPA() {
    await prompt.start();

    const { primeiroTermo, razao } = await prompt.get(['primeiroTermo', 'razao']);

    const primeiroTermoNum = parseFloat(primeiroTermo);
    const razaoNum = parseFloat(razao);

    if (isNaN(primeiroTermoNum) || isNaN(razaoNum)) {
        console.log("Por favor, insira valores numéricos válidos para o primeiro termo e a razão.");
        return;
    }

    console.log("Os 10 primeiros elementos da PA:");

    let soma = 0;
    let termoAtual = primeiroTermoNum;

    for (let i = 0; i < 10; i++) {
        console.log(termoAtual);
        soma += termoAtual;
        termoAtual += razaoNum;
    }

    console.log("Soma de todos os valores da sequência:", soma);
}

module.exports = calcularPA;

const prompt = require('prompt-async');

async function calcularEstatisticas() {
    await prompt.start();

    let continuar = true;
    let soma = 0;
    let menorValor;
    let totalNumeros = 0;
    let numerosPares = 0;

    do {
        const { numero } = await prompt.get(['numero']);

        const numeroAtual = parseFloat(numero);

        if (!isNaN(numeroAtual)) {
            soma += numeroAtual;
            totalNumeros++;

            if (menorValor === undefined || numeroAtual < menorValor) {
                menorValor = numeroAtual;
            }

            if (numeroAtual % 2 === 0) {
                numerosPares++;
            }
        } else {
            console.log("Por favor, insira um número válido.");
            continue;
        }

        const { continuarInput } = await prompt.get(['continuarInput']);
        continuar = continuarInput.toLowerCase().trim() === 'sim';

    } while (continuar);

    const media = soma / totalNumeros;

    console.log(`Soma de todos os valores: ${soma}`);
    console.log(`Menor valor digitado: ${menorValor}`);
    console.log(`Média de todos os valores: ${media}`);
    console.log(`Quantidade de valores pares: ${numerosPares}`);
}

module.exports = calcularEstatisticas;

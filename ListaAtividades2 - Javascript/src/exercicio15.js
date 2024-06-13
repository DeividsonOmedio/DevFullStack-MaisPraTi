const prompt = require('prompt-async');

async function encontrarNumerosPares() {
    await prompt.start();

    let numeros = [];
    let numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const { numero } = await prompt.get(['numero']);
        numeros.push(parseInt(numero));
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push({ numero: numeros[i], posicao: i });
        }
    }

    console.log("Números pares digitados e suas posições:");
    for (let i = 0; i < numerosPares.length; i++) {
        console.log(`Número ${numerosPares[i].numero} na posição ${numerosPares[i].posicao}`);
    }
}

module.exports = encontrarNumerosPares;

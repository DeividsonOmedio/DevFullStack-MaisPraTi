const prompt = require('prompt-async');

async function processarValores() {
    await prompt.start();

    const maxVetor = 5;
    let pares = [];
    let impares = [];

    console.log('Insira os 30 valores:');
    for (let i = 0; i < 30; i++) {
        const { valor } = await prompt.get([`valor ${i + 1}`]);
        const numero = parseInt(valor, 10);

        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
            i--;
            continue;
        }

        if (numero % 2 === 0) {
            pares.push(numero);
            if (pares.length === maxVetor) {
                console.log('Vetor de pares cheio:', pares);
                pares = [];
            }
        } else {
            impares.push(numero);
            if (impares.length === maxVetor) {
                console.log('Vetor de ímpares cheio:', impares);
                impares = [];
            }
        }
    }

    if (pares.length > 0) {
        console.log('Vetor de pares restante:', pares);
    }
    if (impares.length > 0) {
        console.log('Vetor de ímpares restante:', impares);
    }
}

module.exports = processarValores;
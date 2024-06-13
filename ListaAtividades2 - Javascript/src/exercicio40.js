const prompt = require('prompt-async');

async function verificarGanhadoresLoto() {
    await prompt.start();

    console.log('Digite os 5 números do resultado oficial da Loto:');
    let resultadoOficial = [];
    for (let i = 0; i < 5; i++) {
        const { numero } = await prompt.get([`Número ${i + 1}`]);
        resultadoOficial.push(parseInt(numero, 10));
    }

    console.log('Digite os números das 50 apostas (5 números para cada aposta):');
    for (let j = 0; j < 50; j++) {
        let aposta = [];
        console.log(`Aposta ${j + 1}:`);
        for (let k = 0; k < 5; k++) {
            const { numero } = await prompt.get([`Número ${k + 1}`]);
            aposta.push(parseInt(numero, 10));
        }

        if (aposta.every(num => resultadoOficial.includes(num))) {
            console.log(`Aposta ${j + 1}: Ganhador`);
        } else {
            console.log(`Aposta ${j + 1}: Não Ganhou`);
        }
    }
}

module.exports = verificarGanhadoresLoto;
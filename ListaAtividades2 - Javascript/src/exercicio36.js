const prompt = require('prompt-async');

async function verificarLoteria() {
    await prompt.start();

    let gabarito = [];
    console.log('Insira os 13 elementos do gabarito:');
    for (let i = 0; i < 13; i++) {
        const { valor } = await prompt.get([`Elemento ${i + 1}`]);
        gabarito.push(parseInt(valor, 10));
    }

    for (let i = 0; i < 100; i++) {
        console.log(`\nApostador ${i + 1}:`);
        const { numeroCartao } = await prompt.get([`Número do cartão`]);
        let respostas = [];
        console.log('Insira as 13 respostas do apostador:');
        for (let j = 0; j < 13; j++) {
            const { resposta } = await prompt.get([`Resposta ${j + 1}`]);
            respostas.push(parseInt(resposta, 10));
        }

        let acertos = 0;
        for (let k = 0; k < 13; k++) {
            if (respostas[k] === gabarito[k]) {
                acertos++;
            }
        }

        console.log(`Número do cartão: ${numeroCartao}`);
        console.log(`Número de acertos: ${acertos}`);
        if (acertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    }
}

module.exports = verificarLoteria;

const prompt = require('prompt-async');

async function verificarProva() {
    await prompt.start();

    let gabarito = [];
    console.log('Insira os 20 elementos do gabarito (caracteres):');
    for (let i = 0; i < 20; i++) {
        const { valor } = await prompt.get([`Elemento ${i + 1}`]);
        gabarito.push(valor.trim());
    }

    for (let i = 0; i < 50; i++) {
        console.log(`\nAluno ${i + 1}:`);
        let respostas = [];
        console.log('Insira as 20 respostas do aluno (caracteres):');
        for (let j = 0; j < 20; j++) {
            const { resposta } = await prompt.get([`Resposta ${j + 1}`]);
            respostas.push(resposta.trim());
        }

        let acertos = 0;
        for (let k = 0; k < 20; k++) {
            if (respostas[k] === gabarito[k]) {
                acertos++;
            }
        }

        console.log(`Número de acertos do aluno ${i + 1}: ${acertos}`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    }
}

module.exports = verificarProva;
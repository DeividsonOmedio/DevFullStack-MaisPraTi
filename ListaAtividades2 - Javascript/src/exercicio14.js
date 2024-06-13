const prompt = require('prompt-async');

async function listarNomesInvertidos() {
    await prompt.start();

    let nomes = [];

    for (let i = 0; i < 7; i++) {
        const { nome } = await prompt.get(['nome']);
        nomes.push(nome);
    }

    console.log("Listagem dos nomes na ordem inversa:");

    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
}

module.exports = listarNomesInvertidos;

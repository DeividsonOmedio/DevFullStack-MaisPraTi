const prompt = require('prompt-async');

async function listarMenoresIdade() {
    await prompt.start();

    let nomes = [];
    let idades = [];

    for (let i = 0; i < 9; i++) {
        console.log(`Informe os dados da pessoa ${i + 1}:`);
        const { nome, idade } = await prompt.get(['nome', 'idade']);
        nomes.push(nome);
        idades.push(parseInt(idade));
    }

    console.log("Listagem das pessoas menores de idade:");
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

module.exports = listarMenoresIdade;

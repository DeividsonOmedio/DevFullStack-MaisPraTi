const prompt = require('prompt-async');

async function jogarAdivinhacao() {
    await prompt.start();

    const numeroSorteado = Math.floor(Math.random() * 5) + 1;

    const { tentativa } = await prompt.get(['tentativa']);

    const tentativaNum = parseInt(tentativa, 10);

    if (isNaN(tentativaNum) || tentativaNum < 1 || tentativaNum > 5) {
        console.log("Por favor, insira um número válido entre 1 e 5.");
        return;
    }

    if (tentativaNum === numeroSorteado) {
        console.log("Parabéns! Você adivinhou o número!");
    } else {
        console.log(`Que pena! O número sorteado foi ${numeroSorteado}.`);
    }
}

module.exports = jogarAdivinhacao;

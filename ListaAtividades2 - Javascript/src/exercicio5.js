const prompt = require('prompt-async');

async function jogarJoKenPo() {
    await prompt.start();

    const opcoes = ['pedra', 'papel', 'tesoura'];

    console.log("Escolha uma opção: pedra, papel ou tesoura");

    const { escolhaUsuario } = await prompt.get(['escolhaUsuario']);

    const escolhaFormatada = escolhaUsuario.toLowerCase().trim();

    if (!opcoes.includes(escolhaFormatada)) {
        console.log("Opção inválida. Por favor, escolha entre pedra, papel ou tesoura.");
        return;
    }

    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(`Você escolheu: ${escolhaFormatada}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);

    if (escolhaFormatada === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaFormatada === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaFormatada === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaFormatada === 'tesoura' && escolhaComputador === 'papel')
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Você perdeu!");
    }
}

module.exports = jogarJoKenPo;

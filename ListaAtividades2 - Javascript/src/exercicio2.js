const prompt = require('prompt-async');

async function verificarVelocidade() {
    await prompt.start();

    const { velocidade } = await prompt.get(['velocidade']);

    const velocidadeNum = parseFloat(velocidade);

    if (isNaN(velocidadeNum) || velocidadeNum < 0)
        return console.log("Por favor, insira uma velocidade válida.");
        
    

    const limiteVelocidade = 80;

    if (velocidadeNum > limiteVelocidade) {
        const velocidadeExcedida = velocidadeNum - limiteVelocidade;
        const valorMulta = velocidadeExcedida * 5;

        console.log(`Você foi multado! Você excedeu o limite de velocidade em ${velocidadeExcedida.toFixed(2)} Km/h.`);
        console.log(`O valor da multa é R$ ${valorMulta.toFixed(2)}.`);
    } else {
        console.log("Você está dentro do limite de velocidade.");
    }
}

module.exports = verificarVelocidade;

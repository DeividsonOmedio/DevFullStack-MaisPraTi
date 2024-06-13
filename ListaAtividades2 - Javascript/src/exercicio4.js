const prompt = require('prompt-async');

async function verificarTriangulo() {
    await prompt.start();

    const { lado1 } = await prompt.get(['lado1']);
    const { lado2 } = await prompt.get(['lado2']);
    const { lado3 } = await prompt.get(['lado3']);

    const lado1Num = parseFloat(lado1);
    const lado2Num = parseFloat(lado2);
    const lado3Num = parseFloat(lado3);

    if (isNaN(lado1Num) || isNaN(lado2Num) || isNaN(lado3Num) || lado1Num <= 0 || lado2Num <= 0 || lado3Num <= 0) {
        console.log("Por favor, insira valores válidos para os segmentos de reta.");
        return;
    }

    if (lado1Num < lado2Num + lado3Num && lado2Num < lado1Num + lado3Num && lado3Num < lado1Num + lado2Num) {
        console.log("Os segmentos podem formar um triângulo.");
    } else {
        console.log("Os segmentos não podem formar um triângulo.");
    }
}

module.exports = verificarTriangulo;

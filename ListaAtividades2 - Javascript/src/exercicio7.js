const prompt = require('prompt-async');

async function calcularAluguelCarro() {
    await prompt.start();

    const { tipoCarro } = await prompt.get(['tipoCarro']);
    const { diasAluguel } = await prompt.get(['diasAluguel']);
    const { kmPercorridos } = await prompt.get(['kmPercorridos']);

    const tipoCarroFormatado = tipoCarro.toLowerCase().trim();
    const diasAluguelNum = parseInt(diasAluguel, 10);
    const kmPercorridosNum = parseFloat(kmPercorridos);

    if (
        (tipoCarroFormatado !== 'popular' && tipoCarroFormatado !== 'luxo') ||
        isNaN(diasAluguelNum) || diasAluguelNum <= 0 ||
        isNaN(kmPercorridosNum) || kmPercorridosNum < 0
    ) {
        console.log("Por favor, insira valores válidos para tipo de carro, dias de aluguel e Km percorridos.");
        return;
    }

    let custoPorDia;
    let custoPorKm;

    if (tipoCarroFormatado === 'popular') {
        custoPorDia = 90;
        if (kmPercorridosNum <= 100) {
            custoPorKm = 0.20;
        } else {
            custoPorKm = 0.10;
        }
    } else if (tipoCarroFormatado === 'luxo') {
        custoPorDia = 150;
        if (kmPercorridosNum <= 200) {
            custoPorKm = 0.30;
        } else {
            custoPorKm = 0.25;
        }
    }

    const custoTotal = (custoPorDia * diasAluguelNum) + (custoPorKm * kmPercorridosNum);

    console.log(`O preço a ser pago pelo aluguel é R$ ${custoTotal.toFixed(2)}.`);
}

module.exports = calcularAluguelCarro;

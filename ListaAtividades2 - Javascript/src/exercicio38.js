const prompt = require('prompt-async');

async function operarVetor() {
    await prompt.start();

    let vetor = [];
    console.log('Insira os 6 elementos do vetor:');
    for (let i = 0; i < 6; i++) {
        const { valor } = await prompt.get([`Elemento ${i + 1}`]);
        vetor.push(parseFloat(valor));
    }

    const { identificador } = await prompt.get(['Identificador (1- soma, 2- produto, 3- média, 4- ordenar, 5- mostrar vetor)']);

    switch (parseInt(identificador)) {
        case 1:
            const soma = vetor.reduce((acc, curr) => acc + curr, 0);
            console.log(`Soma dos elementos: ${soma}`);
            break;
        case 2:
            const produto = vetor.reduce((acc, curr) => acc * curr, 1);
            console.log(`Produto dos elementos: ${produto}`);
            break;
        case 3:
            const media = vetor.reduce((acc, curr) => acc + curr, 0) / vetor.length;
            console.log(`Média dos elementos: ${media}`);
            break;
        case 4:
            const ordenado = [...vetor].sort((a, b) => a - b);
            console.log(`Vetor ordenado: ${ordenado.join(', ')}`);
            break;
        case 5:
            console.log(`Vetor: ${vetor.join(', ')}`);
            break;
        default:
            console.log('Identificador inválido!');
    }
}

module.exports = operarVetor;
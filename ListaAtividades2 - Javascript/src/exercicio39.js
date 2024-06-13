const prompt = require('prompt-async');

async function compactarVetor() {
    await prompt.start();

    let vetorA = [];
    console.log('Insira os 100 elementos do vetor A (valores nulos ou negativos serão removidos):');

    for (let i = 0; i < 100; i++) {
        const { valor } = await prompt.get([`Elemento ${i + 1}`]);
        vetorA.push(parseFloat(valor));
    }

    let vetorB = vetorA.filter(element => element > 0);

    console.log('Vetor A:');
    console.log(vetorA);
    console.log('Vetor B (compactado):');
    console.log(vetorB);
}

module.exports = compactarVetor;
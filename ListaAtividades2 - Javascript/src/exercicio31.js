const prompt = require('prompt-async');

async function processarMatriz() {
    await prompt.start();

    const { A } = await prompt.get(['A']);
    const numA = parseInt(A, 10);

    const linhas = 30;
    const colunas = 30;
    let V = Array.from({ length: linhas }, () => 
        Array.from({ length: colunas }, () => Math.floor(Math.random() * 10))
    );

    let contador = 0;
    let X = [];

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (V[i][j] === numA) {
                contador++;
            } else {
                X.push(V[i][j]);
            }
        }
    }

    console.log(`Número de vezes que ${numA} aparece na matriz: ${contador}`);
    console.log("Matriz X (elementos diferentes de A):", X);
}

module.exports = processarMatriz;


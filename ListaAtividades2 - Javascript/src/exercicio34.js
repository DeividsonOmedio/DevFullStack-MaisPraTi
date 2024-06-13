const prompt = require('prompt-async');

async function processarMatriz50x50() {
    await prompt.start();

    const linhas = 50;
    const colunas = 50;
    let M = [];

    console.log('Insira os elementos da matriz 50x50:');
    for (let i = 0; i < linhas; i++) {
        M[i] = [];
        for (let j = 0; j < colunas; j++) {
            const { valor } = await prompt.get([`valor (${i},${j})`]);
            M[i][j] = parseFloat(valor);
        }
    }

    console.log("Matriz Original:");
    for (let i = 0; i < linhas; i++) {
        console.log(M[i].join(" "));
    }

    for (let i = 0; i < linhas; i++) {
        const diagonalPrincipal = M[i][i];
        for (let j = 0; j < colunas; j++) {
            M[i][j] *= diagonalPrincipal;
        }
    }

    console.log("\nMatriz Modificada:");
    for (let i = 0; i < linhas; i++) {
        console.log(M[i].join(" "));
    }
}

module.exports = processarMatriz50x50;

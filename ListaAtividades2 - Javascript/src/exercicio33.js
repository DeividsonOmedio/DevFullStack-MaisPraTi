const prompt = require('prompt-async');

async function processarMatriz() {
    await prompt.start();

    const linhas = 3;
    const colunas = 3;
    let M = [];

    console.log('Insira os elementos da matriz 3x3:');
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

    let diagonalSecundaria = [];
    for (let i = 0; i < linhas; i++) {
        diagonalSecundaria.push(M[i][colunas - 1 - i]);
    }
    const mediaDiagonalSecundaria = diagonalSecundaria.reduce((acc, val) => acc + val, 0) / diagonalSecundaria.length;

    for (let i = 0; i < linhas; i++) {
        M[i][i] *= mediaDiagonalSecundaria;
    }

    console.log("\nMatriz Modificada:");
    for (let i = 0; i < linhas; i++) {
        console.log(M[i].join(" "));
    }
}

module.exports = processarMatriz;

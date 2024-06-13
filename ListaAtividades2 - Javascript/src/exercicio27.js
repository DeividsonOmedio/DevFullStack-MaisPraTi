function matriz6x6() {

function multiplicarMatrizPorValor(matriz, valor) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    let vetor = [];

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const resultado = matriz[i][j] * valor;
            vetor.push(resultado);
        }
    }

    return vetor;
}

const matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

const valor = 2;

const vetorResultado = multiplicarMatrizPorValor(matriz, valor);
console.log("Vetor resultado:");
console.log(vetorResultado);
}

module.exports = matriz6x6;
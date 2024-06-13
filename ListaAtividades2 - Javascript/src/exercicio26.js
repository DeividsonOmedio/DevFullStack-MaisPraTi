function calcularProdutoMatrizes(A, B) {
    const linhasA = A.length;
    const colunasA = A[0].length;
    const linhasB = B.length;
    const colunasB = B[0].length;

    if (colunasA !== linhasB) {
        console.log("As dimensões das matrizes não são compatíveis para multiplicação.");
        return;
    }

    let P = [];
    for (let i = 0; i < linhasA; i++) {
        P[i] = new Array(colunasB).fill(0);
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

module.exports = calcularProdutoMatrizes;
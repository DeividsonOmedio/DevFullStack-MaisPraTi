function imprimirMatrizIdentidade() {
    const ordem = 7;
    let matriz = [];

    for (let i = 0; i < ordem; i++) {
        matriz[i] = [];
        for (let j = 0; j < ordem; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }

    console.log("Matriz Identidade:");

    for (let i = 0; i < ordem; i++) {
        let linha = "";
        for (let j = 0; j < ordem; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

module.exports = imprimirMatrizIdentidade;
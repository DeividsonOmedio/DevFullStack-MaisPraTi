function exercicio30() {
    function calcularSomasLinhasColunasEMostrar(matriz) {
        const linhas = matriz.length;
        const colunas = matriz[0].length;
    
        let somaLinhas = new Array(linhas).fill(0);
        let somaColunas = new Array(colunas).fill(0);
    
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                somaLinhas[i] += matriz[i][j];
                somaColunas[j] += matriz[i][j];
            }
        }
    
        console.log("Matriz:");
        for (let i = 0; i < linhas; i++) {
            console.log(matriz[i].join(" "));
        }
    
        console.log("Vetor de somas das linhas (SL):", somaLinhas);
        console.log("Vetor de somas das colunas (SC):", somaColunas);
    }
    
    const matriz = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
    
    calcularSomasLinhasColunasEMostrar(matriz);
    
}

module.exports = exercicio30;
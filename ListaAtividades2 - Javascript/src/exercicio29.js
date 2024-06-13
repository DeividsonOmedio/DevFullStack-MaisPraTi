function matriz5x5() {
    function calcularSomasEMostrarMatriz(matriz) {
        const linhas = matriz.length;
        const colunas = matriz[0].length;
    
        let somaLinha4 = 0;
        let somaColuna2 = 0;
        let somaDiagonalPrincipal = 0;
        let somaTotal = 0;
    
        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                if (i === 3) { 
                    somaLinha4 += matriz[i][j];
                }
                if (j === 1) { 
                    somaColuna2 += matriz[i][j];
                }
                if (i === j) { 
                    somaDiagonalPrincipal += matriz[i][j];
                }
                somaTotal += matriz[i][j];
            }
        }
    
        console.log("Soma da linha 4:", somaLinha4);
        console.log("Soma da coluna 2:", somaColuna2);
        console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
        console.log("Soma de todos os elementos:", somaTotal);
        console.log("Matriz:");
    
        for (let i = 0; i < linhas; i++) {
            let linha = "";
            for (let j = 0; j < colunas; j++) {
                linha += matriz[i][j] + " ";
            }
            console.log(linha);
        }
    }
    
    const matriz = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
    
    calcularSomasEMostrarMatriz(matriz);
    
}

module.exports = matriz5x5;
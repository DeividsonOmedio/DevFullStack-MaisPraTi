
function calcularSomaColunas() {
    const linhas = 15;
    const colunas = 20;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.random() * 10;
        }
    }

    let somaColunas = new Array(colunas).fill(0);

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            somaColunas[j] += matriz[i][j];
        }
    }

    console.log("Soma de cada coluna:");

    for (let j = 0; j < colunas; j++) {
        console.log(`Coluna ${j + 1}: ${somaColunas[j]}`);
    }
}

module.exports = calcularSomaColunas;

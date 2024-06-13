const prompt = require('prompt-async');

async function dividirMatrizPorMaiorElemento() {
    await prompt.start();

    const linhas = 12;
    const colunas = 13;
    let M = Array.from({ length: linhas }, () =>
        Array.from({ length: colunas }, () => Math.floor(Math.random() * 20) - 10) // valores entre -10 e 9
    );

    console.log("Matriz Original:");
    for (let i = 0; i < linhas; i++) {
        console.log(M[i].join(" "));
    }

    let MModificada = M.map(linha => {
        let maiorEmModulo = Math.max(...linha.map(Math.abs));
        return linha.map(elemento => elemento / maiorEmModulo);
    });

    console.log("\nMatriz Modificada:");
    for (let i = 0; i < linhas; i++) {
        console.log(MModificada[i].map(e => e.toFixed(2)).join(" "));
    }
}

module.exports = dividirMatrizPorMaiorElemento;

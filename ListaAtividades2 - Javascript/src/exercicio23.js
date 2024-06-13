const prompt = require('prompt-async');

async function calcularEstatisticas() {
    await prompt.start();

    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = Number.NEGATIVE_INFINITY;
    let totalPessoas = 0;
    let pessoasSalarioAte350 = 0;

    while (true) {
        const { salario, filhos } = await prompt.get(['salario', 'filhos']);

        const salarioNum = parseFloat(salario);
        const filhosNum = parseInt(filhos);

        if (salario.toLowerCase() === 'parar') {
            break;
        }

        somaSalarios += salarioNum;
        somaFilhos += filhosNum;
        maiorSalario = Math.max(maiorSalario, salarioNum);
        totalPessoas++;

        if (salarioNum <= 350) {
            pessoasSalarioAte350++;
        }
    }

    const mediaSalario = somaSalarios / totalPessoas;
    const mediaFilhos = somaFilhos / totalPessoas;

    const percentualSalarioAte350 = (pessoasSalarioAte350 / totalPessoas) * 100;

    console.log("Estatísticas da população:");
    console.log("Média de salário:", mediaSalario.toFixed(2));
    console.log("Média do número de filhos:", mediaFilhos.toFixed(2));
    console.log("Maior salário:", maiorSalario.toFixed(2));
    console.log("Percentual de pessoas com salário até R$ 350,00:", percentualSalarioAte350.toFixed(2) + "%");
}

module.exports = calcularEstatisticas;

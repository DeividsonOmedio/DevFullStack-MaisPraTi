const prompt = require('prompt-async');

async function calcularSalarioPorSexo() {
    await prompt.start();

    let totalSalarioHomens = 0;
    let totalSalarioMulheres = 0;

    let continuar = true;

    while (continuar) {
        const { salario, sexo } = await prompt.get(['salario', 'sexo']);

        const salarioNum = parseFloat(salario);

        if (isNaN(salarioNum) || salarioNum < 0) {
            console.log("Por favor, insira um salário válido.");
            continue;
        }

        if (sexo.toLowerCase().trim() === 'masculino') {
            totalSalarioHomens += salarioNum;
        } else if (sexo.toLowerCase().trim() === 'feminino') {
            totalSalarioMulheres += salarioNum;
        } else {
            console.log("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
            continue;
        }

        const resposta = await prompt.get(['continuar']);
        continuar = resposta.continuar.toLowerCase().trim() === 'sim';
    }

    console.log(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
    console.log(`Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
}

module.exports = calcularSalarioPorSexo;

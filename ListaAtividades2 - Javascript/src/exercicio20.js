const prompt = require('prompt-async');

async function calcularContracheques() {
    await prompt.start();

    let funcionarios = [];

    for (let i = 0; i < 80; i++) {
        console.log(`Por favor, insira os dados do funcionário ${i + 1}:`);
        const { matricula, nome, salarioBruto } = await prompt.get(['matricula', 'nome', 'salarioBruto']);

        const funcionario = {
            matricula: matricula,
            nome: nome,
            salarioBruto: parseFloat(salarioBruto)
        };

        funcionarios.push(funcionario);
    }

    console.log("Contracheques dos funcionários:");

    for (let i = 0; i < funcionarios.length; i++) {
        const funcionario = funcionarios[i];
        const deducaoINSS = funcionario.salarioBruto * 0.12;
        const salarioLiquido = funcionario.salarioBruto - deducaoINSS;

        console.log(`Funcionário ${i + 1}:`);
        console.log("Matrícula:", funcionario.matricula);
        console.log("Nome:", funcionario.nome);
        console.log("Salário bruto:", funcionario.salarioBruto);
        console.log("Dedução INSS:", deducaoINSS);
        console.log("Salário líquido:", salarioLiquido);
        console.log("----------------------------------");
    }
}

module.exports = calcularContracheques;

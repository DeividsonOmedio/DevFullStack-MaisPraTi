const prompt = require('prompt-async');

async function criarRegistroFuncionario() {
    await prompt.start();

    console.log("Por favor, insira os dados do funcionário:");
    const { nome, cargo, salario } = await prompt.get(['nome', 'cargo', 'salario']);

    const funcionario = {
        nome: nome,
        cargo: cargo,
        salario: parseFloat(salario)
    };

    console.log("Registro do funcionário:");
    console.log("Nome:", funcionario.nome);
    console.log("Cargo:", funcionario.cargo);
    console.log("Salário:", funcionario.salario);
}

module.exports = criarRegistroFuncionario;

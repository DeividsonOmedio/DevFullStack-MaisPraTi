function exercicio42(){
    
    const dados = {
    nome: 'Maria',
    idade: 30,
    hobbies: ['leitura', 'natação', 'jogos'],
    endereco: {
        rua: 'Rua A',
        numero: 123
    },
    notas: [10, 9, 8],
    ativo: true,
    telefones: ['123-4567', '987-6543']
};

function filtrarPropriedadesArrays(obj) {
    const resultado = {};
    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

const propriedadesArrays = filtrarPropriedadesArrays(dados);

console.log(propriedadesArrays);
}

module.exports = exercicio42;
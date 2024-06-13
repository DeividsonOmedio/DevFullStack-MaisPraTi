function exercicio44() {
    function contarPropriedadesString(objeto) {
        let count = 0;
    
        for (let prop in objeto) {
            if (typeof objeto[prop] === 'string') {
                count++;
            }
        }
    
        return count;
    }
    
    const pessoa = {
        nome: 'João',
        idade: 30,
        cidade: 'São Paulo',
        telefone: '(11) 1234-5678',
        email: 'joao@example.com'
    };
    
    const numeroStrings = contarPropriedadesString(pessoa);
    console.log(`Número de propriedades do tipo string: ${numeroStrings}`); // Deve imprimir 4
    
}

module.exports = exercicio44;
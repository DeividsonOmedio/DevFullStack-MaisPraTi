function exercicio49() {
    function agruparTransacoesPorCategoria(transacoes) {
        let resultado = {};
    
        transacoes.forEach(transacao => {
            const { id, valor, data, categoria } = transacao;
    
            if (resultado[categoria]) {
                resultado[categoria].transacoes.push(transacao);
                resultado[categoria].subtotal += valor;
            } else {
                resultado[categoria] = {
                    transacoes: [transacao], 
                    subtotal: valor           
                };
            }
        });
    
        return resultado;
    }
    
    const transacoes = [
        { id: 1, valor: 100.0, data: '2024-06-01', categoria: 'Alimentação' },
        { id: 2, valor: 50.0, data: '2024-06-02', categoria: 'Transporte' },
        { id: 3, valor: 80.0, data: '2024-06-03', categoria: 'Alimentação' },
        { id: 4, valor: 120.0, data: '2024-06-04', categoria: 'Lazer' },
        { id: 5, valor: 60.0, data: '2024-06-05', categoria: 'Alimentação' },
        { id: 6, valor: 90.0, data: '2024-06-06', categoria: 'Transporte' }
    ];
    
    const resultado = agruparTransacoesPorCategoria(transacoes);
    console.log(resultado);
    
}

module.exports = exercicio49;
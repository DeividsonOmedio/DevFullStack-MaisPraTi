function exercicio46() {
    function sumarizarVendasPorVendedor(vendas) {
        let totalVendasPorVendedor = {};
    
        vendas.forEach(venda => {
            let { vendedor, valor } = venda;
    
            totalVendasPorVendedor[vendedor] = (totalVendasPorVendedor[vendedor] || 0) + valor;
        });
    
        return totalVendasPorVendedor;
    }
    
    // Exemplo de uso:
    const vendas = [
        { vendedor: 'João', valor: 1000 },
        { vendedor: 'Maria', valor: 1500 },
        { vendedor: 'João', valor: 500 },
        { vendedor: 'Pedro', valor: 2000 },
        { vendedor: 'Maria', valor: 800 }
    ];
    
    const resultado = sumarizarVendasPorVendedor(vendas);
    console.log(resultado);
    
}

module.exports = exercicio46;
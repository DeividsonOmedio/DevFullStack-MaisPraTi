function exercicio48 () {
    function combinarInventarios(inventarioLojaA, inventarioLojaB) {
        let inventarioCombinado = {};
    
        Object.keys(inventarioLojaA).forEach(item => {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioLojaA[item];
            } else {
                inventarioCombinado[item] = inventarioLojaA[item];
            }
        });
    
        Object.keys(inventarioLojaB).forEach(item => {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += inventarioLojaB[item];
            } else {
                inventarioCombinado[item] = inventarioLojaB[item];
            }
        });
    
        return inventarioCombinado;
    }
    
    const inventarioLojaA = {
        "maçã": 10,
        "banana": 5,
        "laranja": 8
    };
    
    const inventarioLojaB = {
        "banana": 3,
        "abacaxi": 6,
        "laranja": 4
    };
    
    const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
    console.log(inventarioTotal);
    
}

module.exports = exercicio48;
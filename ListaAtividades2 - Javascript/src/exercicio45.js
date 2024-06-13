function exercicio45 () {
    function contarOcorrencias(array) {
        let ocorrencias = {};
    
        array.forEach(item => {
            ocorrencias[item] = (ocorrencias[item] || 0) + 1;
        });
    
        return ocorrencias;
    }
    
    const arrayStrings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã", "uva"];
    const resultado = contarOcorrencias(arrayStrings);
    
    console.log(resultado);
    
}

module.exports = exercicio45;
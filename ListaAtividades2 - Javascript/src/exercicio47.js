function exercicio47 () {
    function transformarObjeto(objeto, funcao) {
        let objetoTransformado = {};
    
        Object.keys(objeto).forEach(chave => {
            objetoTransformado[chave] = funcao(objeto[chave]);
        });
    
        return objetoTransformado;
    }
    
    const pessoa = {
        nome: 'João',
        idade: 30,
        cidade: 'São Paulo'
    };
    
    function transformarParaUppercase(valor) {
        if (typeof valor === 'string') {
            return valor.toUpperCase();
        }
        return valor;
    }
    
    const pessoaTransformada = transformarObjeto(pessoa, transformarParaUppercase);
    console.log(pessoaTransformada);
    
}

module.exports = exercicio47;
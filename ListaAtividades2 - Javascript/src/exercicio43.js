function exercicio43() {
    function combinarObjetos(obj1, obj2) {
        const novoObjeto = {};

        for (let prop in obj1) {
            if (obj1.hasOwnProperty(prop)) {
                novoObjeto[prop] = obj1[prop];
            }
        }

        for (let prop in obj2) {
            if (obj2.hasOwnProperty(prop)) {
                novoObjeto[prop] = obj2[prop];
            }
        }

        return novoObjeto;
    }

    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    const objCombinado = combinarObjetos(obj1, obj2);
    console.log(objCombinado);
}

module.exports = exercicio43;
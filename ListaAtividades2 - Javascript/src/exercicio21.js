function exercicio21() {
function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;

    if (sexo === 'masculino') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = 62.1 * altura - 44.7;
    } else {
        console.log("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
        return;
    }

    return pesoIdeal;
}

const altura = 1.75;
const sexo = 'masculino';
const pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log("O peso ideal é:", pesoIdeal);
}

module.exports = exercicio21;
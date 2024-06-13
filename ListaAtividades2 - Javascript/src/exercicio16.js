function preencherVetorAleatorio() {
    let vetor = [];

    for (let i = 0; i < 20; i++) {
        vetor.push(Math.floor(Math.random() * 100));
    }

    console.log("Números gerados aleatoriamente:");
    console.log(vetor);

    vetor.sort((a, b) => a - b);

    console.log("Números ordenados em ordem crescente:");
    console.log(vetor);
}

module.exports = preencherVetorAleatorio;

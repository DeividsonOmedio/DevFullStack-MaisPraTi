function fibonacciArray() {
    let fibonacciArray = [];

    fibonacciArray[0] = 1;
    fibonacciArray[1] = 1;

    for (let i = 2; i < 15; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    console.log("Vetor preenchido com os primeiros 15 elementos da Sequência de Fibonacci:");
    console.log(fibonacciArray);
}


module.exports = fibonacciArray;

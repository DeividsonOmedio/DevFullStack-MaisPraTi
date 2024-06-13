function fibonacci() {
    let a = 1;
    let b = 1;
    let temp;

    console.log("Os 10 primeiros elementos da Sequência de Fibonacci:");

    console.log(a);

    for (let i = 1; i < 10; i++) {
        console.log(b);
        temp = a;
        a = b;
        b = temp + b;
    }
}

module.exports = fibonacci;

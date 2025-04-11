
// need to make the fibonachi until the specified length
// fib sequence is 1 + 1 = 2 + 1

const fibonacci = function(num) {
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else if (num === '0') {
        return 0;
    }

    const fibonacciArray = [];
    let n1 = 1;
    let n2 = 1;
    let nextTerm;

    for (let index = 1; index < num; index++) {
        fibonacciArray.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    fibonacciArray.push(n1);

    return fibonacciArray[fibonacciArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

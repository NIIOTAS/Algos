//Print the first 10 Fibonacci numbers without using recursion.
function printFibonacci() {
    let a = 0, b = 1;
    for (let i = 0; i < 10; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

//Create a function that will find the nth Fibonacci number using recursion
function findFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
//calculating the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;

console.log(sum);
}

//calculate 10! (10 factorial)
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial = factorial * i;
}
console.log(factorial);


function factorialOfNumber(n) {
    //let factorial = 1;
    for (let i = 1; i <= n; i++) {
        var prod = n * i;
    }
    return prod;
}
console.log(factorialOfNumber(10));
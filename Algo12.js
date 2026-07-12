//Create a function that will return in an array the first “p” prime numbers
//greater than “n”
function getFirstPPrimesGreaterThanN(p, n) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
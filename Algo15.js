//Calculate the sum of first 100 prime numbers and return them in an array
function sumOfFirstNPrimes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }   
    return primes.reduce((acc, curr) => acc + curr, 0);
}

//Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Print the distance between the first 100 prime numbers
function distanceBetweenFirstNPrimes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    let distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
}


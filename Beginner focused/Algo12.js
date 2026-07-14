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

// Rotate an array to the left 1 position
function rotateArrayLeft(arr) {
    if (arr.length === 0) return arr;   
    let firstElement = arr.shift(); // Remove the first element
    arr.push(firstElement); // Add it to the end of the array
    return arr; // Return the rotated array
}

// Rotate an array to the right 1 position
function rotateArrayRight(arr) {
    if (arr.length === 0) return arr;   
    let lastElement = arr.pop(); // Remove the last element
    arr.unshift(lastElement); // Add it to the beginning of the array
    return arr; // Return the rotated array
}

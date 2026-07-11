//Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }
    return true; // No divisors found, so it's prime
}

//Calculate the sum of digits of a positive integer number
function sumOfDigits(num) {
    let sum = 0;                            
    while (num > 0) {
        sum += num % 10;    
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum; // Return the calculated sum of digits
}

//Print the first 100 prime numbers
function printFirst100Primes() {
    let count = 0;              
    let num = 2; // Start checking for prime numbers from 2
    while (count < 100) {
        if (isPrime(num)) {
            console.log(num); // Print the prime number
            count++; // Increment the count of prime numbers found
        }
        num++; // Move to the next number to check
    }
}
//Create a function that will receive n as argument and return an array of n
//random numbers from 1 to n. The numbers should be unique inside the array.
function uniqueRandomNumbers(n) {
    let numbers = [];   
    while (numbers.length < n) {
        let randomNum = Math.floor(Math.random() * n) + 1;  
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}

//Example usage:
let n = 10;
let randomNumbers = uniqueRandomNumbers(n);
console.log(randomNumbers); // Output: An array of 10 unique random numbers from 1 to 10

//Find the frequency of letters inside a string. Return the result as an array of
//arrays. Each subarray has 2 elements: letter and number of occurrences.
function letterFrequency(str) {
    let frequency = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) { // Only consider letters
            char = char.toLowerCase();
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    let result = [];
    for (let letter in frequency) {
        result.push([letter, frequency[letter]]);
    }
    return result;
}

//Example usage:
let str = "Hello, World!";
let freq = letterFrequency(str);
console.log(freq); // Output: [['h', 1], ['e', 1], ['l', 3], ['o', 2], ['w', 1], ['r', 1], ['d', 1]]

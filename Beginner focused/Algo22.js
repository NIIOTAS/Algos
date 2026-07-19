//Create a function to return the longest word in a string
function longestWord(str) {
    let words = str.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

//Example usage:
let sentence = "The quick brown fox jumps over the lazy dog";
let longest = longestWord(sentence);
console.log(longest); // Output: "jumps"    

//Shuffle an array of strings
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }   
    return arr;
}

//Example usage:
let stringArray = ["apple", "banana", "cherry", "date"];
let shuffledArray = shuffleArray(stringArray);
console.log(shuffledArray); // Output: A shuffled version of the original array


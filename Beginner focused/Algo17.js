//Create a function that will return the number of words in a text
function countWords(text) {
    return text.split(" ").length;
}   

//Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

//Calculate the sum of numbers received in a comma delimited string
function sumNumbers(numbers) {
    return numbers.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
}

//Create a function that returns an array with words inside a text.
function getWords(text) {
    return text.split(" ");
}   

//Create a function to convert a CSV text to a “bi-dimensional” array
function csvToArray(csvText) {
    return csvText.split("\n").map(row => row.split(","));
}   

//Create a function that converts a string to an array of characters
function stringToCharArray(text) {
    return text.split("");
}
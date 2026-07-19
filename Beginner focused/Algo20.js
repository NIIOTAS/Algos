//Create a function that will receive a bi-dimensional array as argument and a
//number and will extract as a unidimensional array the column specified by the
//number
function extractColumn(biArray, colIndex) {
    let column = [];
    for (let i = 0; i < biArray.length; i++) {
        column.push(biArray[i][colIndex]);
    }
    return column;
}

//Example usage:
let biArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];  
let column = extractColumn(biArray, 1); // Extracts the second column
console.log(column); // Output: [2, 5, 8]   

//Create a function that will convert a string containing a binary number into a
//number
function binaryStringToNumber(binaryString) {
    return parseInt(binaryString, 2);
}

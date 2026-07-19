//Create a function to calculate the sum of all the numbers in a jagged array
//(contains numbers or other arrays of numbers on an unlimited number of
//levels)
function calculateSum(jaggedArray) {
    let sum = 0;
    for (let i = 0; i < jaggedArray.length; i++) {
        if (Array.isArray(jaggedArray[i])) {
            sum += calculateSum(jaggedArray[i]);
        } else {
            sum += jaggedArray[i];
        }
    }
    return sum;
}

//Example usage:
let jaggedArray = [1, [2, 3], [4, [5, 6]], 7];
let totalSum = calculateSum(jaggedArray);
console.log(totalSum); // Output: 28    

//Find the maximum number in a jagged array of numbers or array of numbers
function findMax(jaggedArray) {
    let max = -Infinity;
    for (let i = 0; i < jaggedArray.length; i++) {
        if (Array.isArray(jaggedArray[i])) {
            let nestedMax = findMax(jaggedArray[i]);
            if (nestedMax > max) {
                max = nestedMax;
            }
        } else {
            if (jaggedArray[i] > max) {
                max = jaggedArray[i];
            }
        }
    }
    return max;
}

//Example usage:
let jaggedArray2 = [1, [2, 3], [4, [5, 6]], 7];
let maxNumber = findMax(jaggedArray2);
console.log(maxNumber); // Output: 7

//Deep copy a jagged array with numbers or other arrays in a new array
function deepCopy(jaggedArray) {
    let copy = [];
    for (let i = 0; i < jaggedArray.length; i++) {
        if (Array.isArray(jaggedArray[i])) {
            copy.push(deepCopy(jaggedArray[i]));
        } else {
            copy.push(jaggedArray[i]);
        }   
}
    return copy;
}

//Example usage:
let jaggedArray3 = [1, [2, 3], [4, [5, 6]], 7];
let copiedArray = deepCopy(jaggedArray3);
console.log(copiedArray); // Output: [1, [2, 3], [4, [5, 6]], 7]


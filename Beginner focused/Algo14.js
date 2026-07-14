// Create a function that will merge two arrays and return the result as a new
// array
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

//Create a function that will receive two arrays of numbers as arguments and
//return an array composed of all the numbers that are either in the first array
//or second array but not in both

function symmetricDifference(arr1, arr2) {
    let result = [];
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    for (let num of set1) {
        if (!set2.has(num)) {
            result.push(num);
        }
    }
    for (let num of set2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }
    return result;
}

//Create a function that will receive two arrays and will return an array with
// elements that are in the first array but not in the second

function difference(arr1, arr2) {
    let result = [];
    let set2 = new Set(arr2);   
    for (let num of arr1) {
        if (!set2.has(num)) {
            result.push(num);
        }   
    }
    return result;
}

//Create a function that will receive an array of numbers as argument and will return a
//new array with distinct elements
function getDistinctElements(arr) {
    return [...new Set(arr)];
}

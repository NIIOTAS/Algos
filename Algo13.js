// Reverse an array
function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]); // Add elements in reverse order
    }   
    return reversedArr; // Return the reversed array
}

// Reverse a string
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]; // Add characters in reverse order
    }
    return reversedStr; // Return the reversed string
}

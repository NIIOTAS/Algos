//Calculate the sum of numbers in an array of numbers
function sumArray(arr) {
    let sum = 0;       
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element to sum
    }
    return sum; // Return the final sum
}
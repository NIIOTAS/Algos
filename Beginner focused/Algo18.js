//Create a function that will convert a string in an array containing the ASCII codes of
//each character
function stringToAsciiArray(text) {
    return text.split("").map(char => char.charCodeAt(0));
}

//Create a function that will convert an array containing ASCII codes in a string
function asciiArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join("");
}

//Implement the Caesar cypher
function caesarCipher(text, shift) {
    return text.split("").map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join("");
}

//Implement the bubble sort algorithm for an array of numbers
function bubbleSort(numbers) {
    const arr = [...numbers];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

//Implement the insertion sort algorithm for an array of numbers
function insertionSort(numbers) {
    const arr = [...numbers];
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
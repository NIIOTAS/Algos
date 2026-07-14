//Create a function that will add two positive numbers of indefinite size. The numbers
//are received as strings and the result should be also provided as string.
function addLargeNumbers(num1, num2) {
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        let sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}

//create a function that will convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    //formula to convert celsius to fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}   
console.log(celsiusToFahrenheit(30)); 

//create a function that will convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    //formula to convert fahrenheit to celsius
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(fahrenheitToCelsius(30));

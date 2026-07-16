//Create a function that will return the number of words in a text
function countWords(text) {
    return text.split(" ").length;
}   

//Create a function that will capitalize the first letter of each word in a text
function capitalizeWords(text) {
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

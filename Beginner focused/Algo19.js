//Create a function to calculate the distance between two points defined by their x, y
//coordinates
function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.hypot(dx, dy);
}   

// Create a function that will return a Boolean value indicating if two circles
//defined by center coordinates and radius are intersecting
function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance <= (r1 + r2);
}

//Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
    if (n < 0) throw new Error("Negative arguments are not supported.");
    if (n === 0) return BigInt(0);
    if (n === 1) return BigInt(1);  

    let a = BigInt(0);
    let b = BigInt(1);
    let c;  

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

//Calculate 70! with high precision (all digits)
function factorial(n) {
    if (n < 0) throw new Error("Negative arguments are not supported.");
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }   
    return result;
}

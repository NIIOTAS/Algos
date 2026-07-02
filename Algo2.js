//multiplication table of 7.
 let n = 7;

 for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
 }

 //writing a function to generate multiplication table of any number.
 function multiplicationTable(num) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
 };

 //calling the function to generate multiplication table of 5.
 multiplicationTable(5);

 //writing multiplication tables from 1 to 10.

    for (let j = 1; j <= 10; j++) {
     
        for (let i = 1; i <= 12; i++) {
            console.log(`${j} x ${i} = ${j * i}`);
        }
    }

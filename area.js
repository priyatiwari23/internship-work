const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateArea(length, width) {
    return length * width;
}


rl.question("Enter the length of the rectangle: ", function(length) {
    rl.question("Enter the width of the rectangle: ", function(width) {
        length = parseFloat(length);
        width = parseFloat(width);
        const area = calculateArea(length, width);
        
        console.log("The area of the rectangle is: " + area);
        rl.close();
    });
});

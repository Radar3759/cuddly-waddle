//change declaration to rectangle.js instead of storing Maths here
 const rect = require('./rectangle');

function solveRect(l, w) {
    console.log(`Solving for rectangle width dimensions: ${l}, ${w}`);
     
    rect(l, w, (err, rectangle) => { 
    //if the callback is an error do this    
        if(err) {
            console.log('ERROR:', err.message);
    //if the callback is valid do this 
    } else {
        //otherwise log these messages and results
         console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
         console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
     }
    });
    console.log(`This statement is logged after the call to rect()`);
}    
//test the function solveRect with different params
solveRect(2,4);
solveRect(3,5);
solveRect(0, 4);
solveRect(5,-3);

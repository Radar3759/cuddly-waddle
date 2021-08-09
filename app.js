//make a rectangle define maths for perimeter and area
 const rect = {
     perimeter: (x,y) => 2 * (x+y),
     area: (x,y) => x * y
 };
// perimeter: (x, y) => 2 * (x + y),
// area: (x, y) => x * y

// //function to solve rect using params l, w
function solveRect(l, w) {
     //log initial params
     console.log(`Solving for rectangle wiwth dimensions: ${l}, ${w}`);
     //if both l and w are less than or equal to zero log this message in backticks
     if (l <= 0 || w <= 0) {
         console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
     } else {
        //otherwise log these messages and results
         console.log(`Area of rectangle: ${rect.area(l,w)}`);
         console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
     }
 }

// const rect = {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// };

// function solveRect(l, w) {
//     console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

//     if (l <= 0 || w <= 0) {
//         console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
//     } else {
//         console.log(`Area of rectangle: ${rect.area(l, w)}`);
//         console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
//     }
// }


solveRect(2,4);
solveRect(3,5);
solveRect(0, 4);
solveRect(5,-3);

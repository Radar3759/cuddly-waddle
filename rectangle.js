//assign a function as a value for the entire export
module.exports = (x, y, callback) => {
    //if x or y is less <= 0
    if (x <= 0 || y <= 0 ) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        //use ms
        setTimeout(() =>
            callback(null, {
                //because x, y are in the global function, they don't need to be here
                perimeter: () => 2 * ( x + y),
                area: () => x * y
            }),
            //how many ms to wait
            2000
        );
    }
};




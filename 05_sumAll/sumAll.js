const sumAll = function(firstInt, lastInt) {
    let result = 0; // declare variable to hold final sum   
    
    if (firstInt <=0 || 
        lastInt <=0 || 
        typeof firstInt != "number" || 
        typeof lastInt != "number" || 
        !Number.isInteger(firstInt) || 
        !Number.isInteger(lastInt)) {
        return "ERROR"
    }
    
    const start = Math.min(firstInt, lastInt);
    const end = Math.max(firstInt, lastInt);

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;

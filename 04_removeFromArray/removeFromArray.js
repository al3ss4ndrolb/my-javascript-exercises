const removeFromArray = function(array, ...args) {
    let newArray = array.filter(element => !args.includes(element));
    return newArray;
}

removeFromArray([1,2,3,1], 1,2)

// Do not edit below this line
module.exports = removeFromArray;

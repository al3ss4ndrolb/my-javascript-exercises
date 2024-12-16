const repeatString = function(string, times) {
    let result = '';

    if (times < 0) {
        return 'ERROR';    
    } 

    if (string === null) {
        return 'ERROR';
    }

    for (let i = 0; i < times; i++){
        result += string;
    }
        
    return result
};

// console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;

// Do not edit below this line
module.exports = repeatString;

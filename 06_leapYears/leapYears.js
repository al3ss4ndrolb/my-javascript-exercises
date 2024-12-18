const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) { // se l'hanno è disibile per 4 e anche disibile per 100 e per 400 insieme
        return true
    } else {
        return false
    }
    
};

console.log(leapYears(2000));
console.log(leapYears(1957));


// Do not edit below this line
module.exports = leapYears;

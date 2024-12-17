const reverseString = function(word) {
    let length = word.length //misura lunghezza word
    let myArray = [];

    if (length === 0) 
        return ""; 
    
    for (let i = length-1; i >= 0; i--) {
        let char = word.charAt(i);
        
        myArray.push(char); //per ogni carattere mettila dentro una lista
        //console.log(myArray); //print the list with each new char
    }

    return myArray.join(""); //ritorna lista al contrario, dall'ultimo carattere
};

reverseString("a pezzo de merda")

// Do not edit below this line
module.exports = reverseString;

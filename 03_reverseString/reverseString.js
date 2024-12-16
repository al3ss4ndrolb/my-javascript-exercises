const reverseString = function(word) {
    let length = word.length//misura lunghezza word
    let myArray = [];

    if (length === 0) 
        return ""; 
    
    for (let i = length-1; i >= 0; i--) {
        let char = word.charAt(i);

        
        myArray.push(char); //per ogni carattere mettila dentro una lista
    }

    //console.log(myArray);
    return myArray.join("");
    //ritorna lista al contrario, dall'ultimo carattere
};

reverseString("culo")

// Do not edit below this line
module.exports = reverseString;

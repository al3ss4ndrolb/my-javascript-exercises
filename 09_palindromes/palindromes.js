const palindromes = function (str) {
  // Remove punctuation, spaces, and convert to lowercase
  const normalizedStr = str.toLowerCase().replace(/[\W_]/g, "");
  // Reverse the string
  const reversedStr = normalizedStr.split("").reverse().join("");
  // Compare the normalized string with the reversed string
  return normalizedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;

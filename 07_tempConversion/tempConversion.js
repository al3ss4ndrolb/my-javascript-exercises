const convertToCelsius = function(temperature) {
    let resultCelsius = (temperature-32)*5/9; 
    return Math.round(resultCelsius*10)/10;

};

const convertToFahrenheit = function(temperature) {
  let resultFahrentheit= temperature * 9/5 + 32;
  return Math.round(resultFahrentheit*10)/10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

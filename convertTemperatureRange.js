function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; 
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9; 
  }
  
  // Example usage:
  let celsiusRange = [10, 20, 30]; 
  
  console.log("Celsius to Fahrenheit:");
  for (let celsius of celsiusRange) {
    let fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius}°C = ${fahrenheit}°F`);
  }
  
  console.log("\nFahrenheit to Celsius:");
  let fahrenheitRange = [50, 60, 70];
  for (let fahrenheit of fahrenheitRange) {
    let celsius = fahrenheitToCelsius(fahrenheit);
    console.log(`${fahrenheit}°F = ${celsius}°C`);
  }
function convert() {
    let temperatureInput = document.getElementById("temperature").value.trim();
    let conversionType = document.getElementById("conversionType").value;
    let conversionMsg = document.querySelector(".result");
    
    if (temperatureInput === "") {
        conversionMsg.textContent = "Please enter a temperature value";
        conversionMsg.classList.add("invalid-input");
        return;
    }

    let enteredTemp = parseFloat(temperatureInput);
    let convertedTemp;
    let conversionLabel;

    if (conversionType === "celsiusToFahrenheit") {
        convertedTemp = (enteredTemp * 9/5) + 32;
        conversionLabel = `${enteredTemp} Celsius is equal to ${convertedTemp.toFixed(2)} Fahrenheit`;
    } else if (conversionType === "fahrenheitToCelsius") {
        convertedTemp = (enteredTemp - 32) * 5/9;
        conversionLabel = `${enteredTemp} Fahrenheit is equal to ${convertedTemp.toFixed(2)} Celsius`;
    } else {
        conversionMsg.textContent = "Invalid conversion type";
        conversionMsg.classList.add("invalid-input");
        return;
    }

    conversionMsg.textContent = conversionLabel;
    conversionMsg.classList.remove("invalid-input");
}
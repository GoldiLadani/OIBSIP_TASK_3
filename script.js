// script.js

document.getElementById("convertButton").addEventListener("click", function() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const outputElement = document.getElementById("output");

    if (isNaN(temperatureInput) || temperatureInput === "") {
        outputElement.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    let convertedTemperature, outputUnit;

    if (unitSelect === "Celsius") {
        convertedTemperature = {
            Fahrenheit: (temperature * 9/5) + 32,
            Kelvin: temperature + 273.15
        };
        outputUnit = ["Fahrenheit", "Kelvin"];
    } else if (unitSelect === "Fahrenheit") {
        convertedTemperature = {
            Celsius: (temperature - 32) * 5/9,
            Kelvin: ((temperature - 32) * 5/9) + 273.15
        };
        outputUnit = ["Celsius", "Kelvin"];
    } else if (unitSelect === "Kelvin") {
        convertedTemperature = {
            Celsius: temperature - 273.15,
            Fahrenheit: ((temperature - 273.15) * 9/5) + 32
        };
        outputUnit = ["Celsius", "Fahrenheit"];
    }

    outputElement.textContent = `${temperature} ${unitSelect} = ${convertedTemperature[outputUnit[0]].toFixed(2)} ${outputUnit[0]}, ${convertedTemperature[outputUnit[1]].toFixed(2)} ${outputUnit[1]}`;
});

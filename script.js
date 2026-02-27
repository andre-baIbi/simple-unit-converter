const convertElement = document.getElementById("convert-button");

const meterRates = {
    mile: 0.000621371,
    kilometer: 0.001,
    feet: 3.28084,
    centimeter: 100,
    meter: 1,
    inch: 39.3701
};

const kilogramRates = {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    metric_ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
    stone: 0.157473
};

function fromUnitUsingRate(value, toUnit, unit){
    switch (unit){
        case "length":
            return value * meterRates[toUnit];
        case "weight":
            return value * kilogramRates[toUnit];
    }
}

function toUnitUsingRate(value, toUnit, unit){
    switch (unit){
        case "length":
            return value / meterRates[toUnit];
        case "weight":
            return value / kilogramRates[toUnit];
    }
}

// Lenght methods

function fromMeters(value, toUnit) {
    return fromUnitUsingRate(value, toUnit, "length")
}

function toMeters(value, toUnit) { 
    return toUnitUsingRate(value, toUnit, "length")
}

function length_converter(value, fromUnit, toUnit){
    return(fromMeters(toMeters(value, fromUnit), toUnit))
}

// Weight methods

function fromKilograms(value, toUnit) {
    return fromUnitUsingRate(value, toUnit, "weight")
}

function toKilograms(value, toUnit) { 
    return toUnitUsingRate(value, toUnit, "weight")
}

function weight_converter(value, fromUnit, toUnit){
    return(fromKilograms(toKilograms(value, fromUnit), toUnit))
}

// Temperature

const toKelvin = {
    celsius: (c) => c + 273.15,
    kelvin: (v) => v,
    fahrenheit: (f) => (f-32) * (5/9) + 273.15,
    rankine: (r) => r * 5/9,
}

const fromKelvin = {
    celsius: (kel) => kel - 273.15,
    fahrenheit: (kel) => (kel - 273.15) * 9/5 + 32,
    kelvin: (kel) => kel,
    rankine: (kel) => kel * 1.8
}

function convertToKelvin(value, fromUnit){
    return toKelvin[fromUnit](value)
}

function convertFromKelvin(value, toUnit){
    return fromKelvin[toUnit](value)
}

function temperature_converter(value, fromUnit, toUnit){
    return convertFromKelvin(convertToKelvin(value, fromUnit), toUnit).toFixed(2)
}


function convert(mode){
    // 0 -> Length / 1 -> Weight / 2 -> Temperature

    const inputElement = document.getElementById("input");     
    const toElement = document.getElementById("to"); 
    const fromElement = document.getElementById("from"); 
    const answerElement = document.getElementById("answer");
    const measurementPElement = document.getElementById("answerUnit")
    const answerSection = document.getElementById("answer-section")
    const convertValueElement = document.getElementById("convertValue")
    const convertValueUnitElement = document.getElementById("convertUnit")
    const mainForm = document.getElementById("main-form");

    fromValue = fromElement.value;
    toValue = toElement.value;
    answerSection.removeAttribute("hidden");
       

    convertValueElement.innerHTML = inputElement.value
    convertValueUnitElement.innerHTML = fromValue

    console.log(mode)

    switch (parseInt(mode)){
        case 0:
            answerElement.innerHTML = length_converter(inputElement.value, fromValue, toValue);
            break;

        case 1:
            answerElement.innerHTML = weight_converter(inputElement.value, fromValue, toValue);
            break;
        
        case 2:
            answerElement.innerHTML = temperature_converter(parseFloat(inputElement.value), fromValue, toValue);
            break;

        default:
            answerElement.innerHTML = "Error : Check JS";
            break;
    }
    

    // set measurement name as in options
    measurementPElement.innerHTML = toElement.options[toElement.selectedIndex].text;

    mainForm.hidden = true;
}

convertElement.addEventListener("click", (e) => {
    e.preventDefault();
    const mode = e.target.getAttribute("data-mode"); 
    convert(mode); 
});
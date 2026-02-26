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

function fromMeters(value, toUnit) {
    return fromUnitUsingRate(value, toUnit, "length")
}

function toMeters(value, toUnit) { 
    return toUnitUsingRate(value, toUnit, "length")
}

function fromKilograms(value, toUnit) {
    return fromUnitUsingRate(value, toUnit, "weight")
}

function toKilograms(value, toUnit) { 
    return toUnitUsingRate(value, toUnit, "weight")
}

function length_converter(value, fromUnit, toUnit){
    return(fromMeters(toMeters(value, fromUnit), toUnit))
}

function weight_converter(value, fromUnit, toUnit){
    return(fromKilograms(toKilograms(value, fromUnit), toUnit))
}


function convert(logic){
    // 0 -> Length / 1 -> Weight

    const inputElement = document.getElementById("input");     
    const toElement = document.getElementById("to"); 
    const fromElement = document.getElementById("from"); 
    const answerElement = document.getElementById("answer");
    const measurementPElement = document.getElementById("measurementName")
    const answerSection = document.getElementById("answer-section")

    
    fromValue = fromElement.value;
    toValue = toElement.value;
    answerSection.removeAttribute("hidden")
    
    console.log(logic)

    switch (parseInt(logic)){
        case 0:
            answerElement.innerHTML = length_converter(inputElement.value, fromValue, toValue);
            break;

        case 1:
            answerElement.innerHTML = weight_converter(inputElement.value, fromValue, toValue);
            break;
        
        default:
            answerElement.innerHTML = "Error : Check JS";
            break;
    }
    

    // set measurement name as in options
    measurementPElement.innerHTML = toElement.options[toElement.selectedIndex].text;
}

convertElement.addEventListener("click", (e) => {
    e.preventDefault();
    const mode = e.target.getAttribute("data-mode"); 
    convert(mode); 
});
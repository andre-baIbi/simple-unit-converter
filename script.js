const convertElement = document.getElementById("convert-button");

const meterRates = {
    mile: 0.000621371,
    km: 0.001,
    feet: 3.28084,
    centimeter: 100,
    meter: 1
};

function fromMeters(value, toUnit) {
    return value * meterRates[toUnit];
}

function toMeters(value, toUnit) { 
    return value / meterRates[toUnit];
}

function feetToMeter(feet){
    return toMeters(feet, "feet")
}

function meterToFeet(meter){
    return fromMeters(meter, "feet")
}

function centimeterToMeter(centimeter){
    return toMeters(centimeter, "centimeter")
}
function meterToCentimeter(meter){
    return fromMeters(meter, "centimeter")
}

const conversionMap = {
    "meter-centimeter" : meterToCentimeter,
    "centimeter-meter" : centimeterToMeter,
    "feet-meter" : feetToMeter,
    "meter-feet" : meterToFeet
    // todo centimeter to feet
}

function convert(){ 
    const lengthElement = document.getElementById("length");     
    const toElement = document.getElementById("to"); 
    const fromElement = document.getElementById("from"); 
    const answerElement = document.getElementById("answer");

    // get length 
    fromValue = fromElement.value;
    toValue = toElement.value;
    
    answerElement.innerHTML = conversionMap[fromValue + "-" + toValue](lengthElement.value);
}

convertElement.addEventListener("click", convert)
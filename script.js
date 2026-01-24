const convertElement = document.getElementById("convert-button");

function fromMeters(value, toUnit) {
    const meterRates = {
        mile: 0.000621371,
        km: 0.001,
        feet: 3.28084,
        centimeter: 100,
        meter: 1
    };

    return value * meterRates[toUnit];

}

function fromCentimeters(value, toUnit) {
    const meterRates = {
        mile: 0.00000621371,
        km: 0.00001,
        feet: 0.0328084,
        meter: 0.01,
        centimeter: 1
    };

    return value * meterRates[toUnit];

}

function centimeterToMeter(centimeter){
    return fromCentimeters(centimeter, "meter")
}
function meterToCentimeter(meter){
    return fromMeters(meter, "centimeter")
}

const conversionMap = {
    "meter-centimeter" : meterToCentimeter,
    "centimeter-meter" : centimeterToMeter
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
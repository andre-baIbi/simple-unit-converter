const convertElement = document.getElementById("convert-button");

const meterRates = {
    mile: 0.000621371,
    kilometer: 0.001,
    feet: 3.28084,
    centimeter: 100,
    meter: 1,
    inch: 39.3701
};

function fromMeters(value, toUnit) {
    return value * meterRates[toUnit];
}

function toMeters(value, toUnit) { 
    return value / meterRates[toUnit];
}

function converter(value, fromUnit, toUnit){
    return(fromMeters(toMeters(value, fromUnit), toUnit))
}


function convert(){ 
    const lengthElement = document.getElementById("length");     
    const toElement = document.getElementById("to"); 
    const fromElement = document.getElementById("from"); 
    const answerElement = document.getElementById("answer");
    const measurementPElement = document.getElementById("measurementName")
    const answerSection = document.getElementById("answer-section")
    

    // get length 
    fromValue = fromElement.value;
    toValue = toElement.value;
    answerSection.removeAttribute("hidden")
    answerElement.innerHTML = converter(lengthElement.value, fromValue, toValue);

    //answerElement.innerHTML = conversionFunctionsMap[fromValue + "-" + toValue](lengthElement.value);

    // set measurement name as in options
    measurementPElement.innerHTML = toElement.options[toElement.selectedIndex].text;
}

convertElement.addEventListener("click", convert)
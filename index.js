const Celsius = document.getElementById("celsius"); 
const Fahrenheit = document.getElementById("fahrenheit"); 
const Kelvin = document.getElementById("kelvin"); 

function calculateTemperature(event){
    const currentvalue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            Fahrenheit.value = ((currentvalue*9/5)+32).toFixed(2)
            Kelvin.value = (currentvalue+273.15).toFixed(2)
            break;
        case "fahrenheit":
            Celsius.value = (currentvalue-32)*(5/9).toFixed(2)
            Kelvin.value = ((currentvalue-32)*5/9+273.15).toFixed(2)
            break;
        case "kelvin":
            Celsius.value = (currentvalue-273.15).toFixed(2)
            Fahrenheit.value = ((currentvalue-273.15)*9/5+32).toFixed(2)
            break;
        default:
            break;
    }
}
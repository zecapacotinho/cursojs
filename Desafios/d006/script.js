function conversor(){
    var res = window.document.getElementById(`res`)
    var c = window.prompt(`Digite uma temperatura em °C(Celsius)`)
    var valor = (c * 9/5) + 32
    var kelvin = c + 273.15

    res.innerHTML += `<h2>A temperatura de ${c}°C, correponde a...</h2>`
    res.innerHTML += `${valor}°F (Fahrenheit)<br>`
    res.innerHTML += `${kelvin}°K (Kelvin)<br>`
    
}
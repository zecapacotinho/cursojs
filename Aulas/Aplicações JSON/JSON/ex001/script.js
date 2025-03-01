const carro = {
    marca: `Fiat`,
    modelo: `Uno`,
    motor: [`1.6`,`1.4`,`1.0`,]
}

//Converteu para texto JSON
let texto= JSON.stringify(carro)

//Colocou o texto no nosso HTML
document.getElementById(`area`).innerHTML = texto;

//Convertemos texto em objeto
let obj = JSON.parse(texto) 

//Pegamos um valor desse objeto
console.log(obj.motor[2])


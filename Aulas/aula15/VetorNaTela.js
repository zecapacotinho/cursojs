let valores = [8, 1, 7,4,2,9]
console.log(valores)
console.log(`_________________________`)
//Uma boa forma de mostrar os Arrays

for(let pass = 0; pass < valores.length; pass++){
    console.log(`A posição ${pass} tem o valor ${valores[pass]}`)
}

console.log(`_________________________`)

//Melhor forma de mostrar os arrays
for (pass in valores){
    console.log(valores[pass])
}

console.log(`:)`)

/*
Pior maneira de mostrar os Arrays

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

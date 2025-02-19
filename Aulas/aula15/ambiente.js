let num = [0,8,1,4,7]
num.push(1)
let pos = num.indexOf(10)
num.sort() 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é do vetor ${num[0]}`)
for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

if(pos == -1){
    console.log(`Esse valor não foi indentificado`)
}
else{
    console.log(`O valor 8 está na posição ${pos}`)
}

function ParOuImpar(n){
    if(n % 2 == 0){
        return `${n} é Par!`
    }
    else{
        return `${n} é Impar!`
    }
}

console.log(ParOuImpar(246))
var idade = 64

if(idade < 16){
    console.log(`Você tem ${idade} anos, então não pode Votar!`)
}else if (idade < 18 || idade >= 65){
    console.log(`Você tem ${idade} anos, então seu Voto é opcional!`)
}else{
    console.log(`Sua idade é de ${idade} anos, então seu Voto é obrigatório!`)
}

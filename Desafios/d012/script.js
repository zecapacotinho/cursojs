function verificar(){
    let anterior = window.prompt(`Qual era o preço anterior do produto?`)
    let atual = window.prompt(`Qual é o preço atual do produto?`)
    let res = window.document.getElementById(`res`)

    res.innerHTML = `<h2>Análisando o valores informandos</h2>`
    res.innerHTML += `O produto custava R$${anterior} e agora custa R$${atual}.<br>`
    let soma = Number.parseFloat(anterior) - Number.parseFloat(atual)
    if(anterior < atual){
        res.innerHTML += `Hoje o produto está mais caro<br>`
        res.innerHTML += `O preço subiu R$${soma} em relação ao preço anterior. `
    } else{
        res.innerHTML += `Hoje o produto está mais barato<br>`
        res.innerHTML += `O preço caiu ${soma} em relação ao preço anterior.`
    }
}
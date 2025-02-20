function conversor(){
    var produto = window.prompt(`Qual é o produto que você esá comprando?`)
    var valor = window.prompt(`Qual é o valor de ${produto}`)
    var res = window.document.getElementById(`res`)

    var soma = Number.parseFloat(valor) * 0.10
    var ValorFinal = Number.parseFloat(valor) - Number.parseFloat(soma) 
    res.innerHTML += `<h2>Calculado desconto de 10%  para ${produto}</h2>`
    res.innerHTML += `Preço original era de R$${valor}`
    res.innerHTML += `Com o desconto você irá pagar ${ValorFinal}`
}

function ProdutoPreço(){
    var produto = window.prompt(`Que produto você está comprando`)
    var preço = window.prompt(`Quanto custa ${produto} que você está comprando`)
    var valor = window.prompt(`Qual valor você deu para pagar o ${produto}`)
    var troco = Number(preço) - Number(valor)

    window.alert(`Você comprou ${produto} que custou R$${preço}. Deu R$${valor}, em dinheiro e vai receber R$${troco} de troca. Volte Sempre!`)

}
var dolar = window.prompt(`Antes de mais nada. Quato está a cotação do dólar agora`)
function conversor(){
    var res = window.document.getElementById(`res`)
    var valor = window.prompt(`Quantos R$ você tem na carteira?`)
    var con = Number.parseFloat(valor) / Number.parseFloat(dolar)

    res.innerHTML = `Você terá ${con} dolares`

}
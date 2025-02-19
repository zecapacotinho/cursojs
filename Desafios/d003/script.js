function AnteSuce(){
    var numero = window.prompt(`Digite um número inteiro qualquer`)
    var s = 1 + Number(numero)
    var d = 1 - Number(numero)
    window.alert(`Antes de ${numero}, temos o número ${s}`)
    window.alert(`Depois de ${numero}, temos o número ${d}`)
}
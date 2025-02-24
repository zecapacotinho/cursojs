function calcular(){
    let a = window.prompt(`Qual o valor de a?`)
    let b = window.prompt(`Qual o valor de b?`)
    let c = window.prompt(`Qual o valor de c?`)
    let res = window.document.getElementById(`res`)

    res.innerHTML += `<h2>Resolvendo Bhaskara</h2>`
    res.innerHTML += `A equação atual é ${a}x² + ${b} + ${c} = 0<br>`
    res.innerHTML += `O calculo realizado será Δ = ${b}² - 4 . ${a} . ${c}<br>`
    
    let soma = (Number(b)*Number(b)) - 4 * Number(a) * Number(c)
    res.innerHTML += `O valor calculado foi Δ = ${soma}`
}
function reajustador(){
    let res = window.document.getElementById(`res`)
    let nome = window.prompt(`Qual o nome do fucionário?`)
    let salário = window.prompt(`Qual é salário de ${nome}`)
    let reajuste = window.prompt(`O salário de ${nome} vai ser reajustado em qual em qual porcentagem?`)
    let resultado = (Number.parseFloat(salário)*Number.parseFloat(reajuste)) / 100
    let final = Number.parseFloat(salário) + Number.parseFloat(resultado)

    res.innerHTML += `<h2>${nome} recebeu um aumente salarial!</h2>`
    res.innerHTML += `Com um aumento de ${reajuste}%, o salário de vai aumentar R$${resultado} no próximo mês.<br>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar R$${final}.`
}
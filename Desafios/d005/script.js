function conversor(){
    var res = window.document.getElementById(`res`)
    var valor = window.prompt(`Digite uma diastância em metros(m)`)

    var km = Number.parseFloat(valor) / 1000
    var hm = Number.parseFloat(valor) / 100
    var dam = Number.parseFloat(valor) / 10
    var dm = Number.parseFloat(valor) * 10
    var cm = Number.parseFloat(valor) * 100
    var mm = Number.parseFloat(valor) * 1000

    res.innerHTML += `<h2>A distância de ${valor} metros, corresponde a... </h2>`
    res.innerHTML += `${km} Kilometros(km)<br>`
    res.innerHTML += `${hm} Hectometro(hm)<br>`
    res.innerHTML += `${dam} Decâmetro(dam)<br>`
    res.innerHTML += `${dm} Decímetro(dm)<br>`
    res.innerHTML += `${cm} Centímetro(cm)<br>`
    res.innerHTML += `${mm} Milímetro(mm)<br>`
    
}
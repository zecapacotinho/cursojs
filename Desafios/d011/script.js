function AnoBissexto(){
    let ano = window.prompt(`Qual ano você quer verificar?`)
    let res = window.document.getElementById(`res`)
    res.innerHTML += `<h2>Análisando o ano de ${ano}...</h2>`
    if(ano % 4 == 0){
        res.innerHTML += `O ano ${ano} é Bissexto`
    } else{
        res.innerHTML += `O ano ${ano} não é Bissexto`
    }
}
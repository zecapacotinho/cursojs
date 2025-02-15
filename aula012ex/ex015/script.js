function carregar(){

    var msg = window.document.getElementById(`msg`)
    var foto = window.document.getElementById(`foto`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = `modelo/manhã.jpg` 
        document.body.style.background = `#F7BD89`       
    } else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = "modelo/tarde.jpg"
        document.body.style.background = `#362438`
    } else{
        //Boa noite!
        img.src = "modelo/noite-1.jpg"
        document.body.style.background = `#09080D`
    }
}

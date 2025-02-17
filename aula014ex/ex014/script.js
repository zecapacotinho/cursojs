function contador(){

    var num = window.document.getElementById(`num`)
    var fim = window.document.getElementById(`fim`)
    var pass = window.document.getElementById(`pass`)
    var msg = window.document.getElementById(`msg`) 
    
    if(num.value == 0 || fim.value == 0 || pass.value == 0){
        window.alert(`[ERRO] Impossível prosseguir! Coloque um valor em cada opção.`)
    } else {
        
        var n = Number(num.value)
        var f = Number(fim.value)
        var p = Number(pass.value)

         for( var c = n; c <= f; c += p){
            msg.innerHTML += `👉 ${c} `
         } 
    }
    
}

function tabuada(){
    var num = window.document.getElementById(`num`)
    var msg = window.document.getElementById(`msg`)
    
    if(num.value == 0){
        window.alert(`[ERRO] Coloque um valor na caixa abaixo`)
    }
    else{
        var item = document.createElement(`option`)
        var n = Number(num.value)
        for(var c = 1; c <= 10; c++){
            item.text += `${n} X ${c} = ${n*c}|`
            msg.appendChild(item)
        }
    }
}   
function BuscarCEP(){

    let input = document.getElementById(`num`).value
    
    if(!input.trim()){
        window.alert(`Por favor, coloque um CEP na caixa abaixo!`)
    } else{

        const ajax = new XMLHttpRequest()
        ajax.open(`GET`, `https://viacep.com.br/ws/`+input+`/json/`)
        ajax.send()

        ajax.onload = function(){
            document.getElementById(`res`).innerHTML = this.responseText;
        }
    }   
}


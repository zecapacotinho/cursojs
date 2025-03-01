function BuscarCEP(){

    let input = document.getElementById(`num`).value

    if(!input.trim()){
        window.alert(`Por favor, coloque um CEP na caixa abaixo!`)
    } else{

        const ajax = new XMLHttpRequest()
        ajax.open(`GET`, `https://viacep.com.br/ws/`+input+`/json/`)
        ajax.send()

        ajax.onload = function(){
            //Transformei o texto em objeto
            let obj = JSON.parse(this.responseText)


            //Peguei os valores que eu queria
            let logradouro = obj.logradouro
            let cidade = obj.localidade
            let estado = obj.uf

            document.getElementById(`res`).innerHTML = `Logradouro: ${logradouro}<br> Cidade: ${cidade}<br> Estado: ${estado}`
        }
    }   
}


const  ajax = new XMLHttpRequest()
ajax.open(`get`, `https://viacep.com.br/ws/01001000/json/`)
ajax.send()

ajax.onload = function(){
    document.getElementById(`area`).innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}
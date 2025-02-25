function notas(){
   let res = window.document.getElementById(`res`)
   let nome = window.prompt(`Qual o nome do aluno?`)
   let nota1 = window.prompt(`Qual a primeira nota de ${nome}:`)
   let nota2 = window.prompt(`Qual a segunda nota de ${nome}:`)
   let resultado = (Number.parseFloat(nota1) + Number.parseFloat(nota2))/2

   res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
   res.innerHTML += `Com as nota ${nota1} e ${nota2}, a média é ${resultado}<br>`
   if(resultado >= 6){
      res.innerHTML += `Com a nota acima 6, ${nome} está APROVADO!`
   } else if(resultado >= 3 || resultado <= 6){
      res.innerHTML += `Com a nota entre 3 e 6, ${nome} está de RECUPERAÇÃO!`
   } else{
      res.innerHTML += `Com a nota abaixo de 3, ${nome} está REPROVADO!`
   }
}
let amigo = {
    nome: `josé`,
    sexo: `M`,
    peso: 87.2,
    engordar(p = 0){
        console.log(`Gordo`)
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
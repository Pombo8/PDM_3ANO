const funcionario = {
    nome: "felipe",
    cargo: "desenvolvedor web",
    salario: 50000,
    endereco :{
        rua: "Rua 1",
        cidade: "Cidade 2",
        estado: "Estado 3",
        cep: "12345-678"
    }
}

function apresentarFuncionario(funcionario){
    const {nome, cargo, salario} = funcionario
    const {endereco:{rua,cidade,estado,cep}} = funcionario

    let salarioBr =salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return  "Nome: "+nome+" || Cargo: "+cargo+" || Salario: "+salarioBr+"\nEndereco - "+rua+" - "+cidade+" - "+estado+" - CEP: "+cep
        
       

}
console.log(apresentarFuncionario(funcionario))
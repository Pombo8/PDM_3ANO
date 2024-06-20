const pessoa ={
    nome:"Felipe2",
    idade:12,
    endereco:{
        logradouro:"rua abc",
        numero: 123
    }
}

const {nome: n, idade: i} = pessoa

console.log(n,i)
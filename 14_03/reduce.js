const alunos = [
    {nome:"lucas",nota:8.2,bolsista:false},
    {nome:"Gustavo",nota:2.3,bolsista:true},
    {nome:"Isa",nota:10,bolsista:true},
    {nome:"Gustavo2",nota:5.4,bolsista:true}

]
const restultado = alunos.map(n=> n.nota).reduce(function(acumulador, atualValor){
    console.log(acumulador,atualValor);
    return acumulador + atualValor;
})

/*const resultadoBolsista = alunos.map(n=>n.bolsista).reduce(function(acumulador,atualValor){
    return acumulador&& atualValor
})
console.log(resultadoBolsista)*/

const resultadoBolsista = alunos.map(e =>e.bolsista).reduce(e= (atualValor,acumulador)=>atualValor&& acumulador)
console.log(resultadoBolsista)


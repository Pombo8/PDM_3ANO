let aprovados = new Array("Bia", "Ana","Carlos");

aprovados.push("Paulo")

// ou aprovados[4].push("Paulo1");

//coloca em ordem alfabetica
aprovados.sort();

//excluir o primeiro elemento
aprovados.shift()

//primeiro parametro = posição
//segundo parametro = qtd de coisas pra deletar
//terceriro parametro = obj pra adicionar
aprovados.splice(0,1,"Bruna")

console.log(aprovados)

//2

const listaA =[1,2,3]
const listaB = [4,5,6]

function concatenarArrays(listaA, listaB){
    return listaA.concat(listaB)
}
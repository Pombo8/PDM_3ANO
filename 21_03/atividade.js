//ATIVIDADE 1

let aprovados = new Array('bia','carlos','ana');

aprovados.push("paulo")

aprovados.sort();

aprovados.shift()

aprovados.splice(0,1,"bruna")

console.log(aprovados)


//ATIVIDADE 2

const listaA = [1,2,3]
const listaB = [4,5,6]

const concatArrays = (listaA,listaB) => listaA.concat(listaB)

console.log(concatArrays(listaA,listaB))


//ATIVIDADE 3

const numeros = [1,2,3,4,5,6,7]

const funcImpar = numeros => numeros.filter(e = numeros=>numeros % 2!=0)
console.log(funcImpar(numeros))


//atividade 4

const nums = [1,2,3,4,5]

const func1 = nums => nums.map(e = numeros=>numeros*3)
const func2 = nums => nums.map(e = numeros=>numeros+10)
console.log(func2(func1(nums)))

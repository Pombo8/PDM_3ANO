
//1
const nomes = ["eu1","eu2","eu3","eu4"]

const funcPrefixo = (nomes) => nomes.map(e=(nomes)=>"Sra."+nomes)

const funcReduce = (nomes) => nomes.reduce(e=(result,current)=>result+" "+current)

console.log(funcReduce(funcPrefixo(nomes)))

//2

const numb = [1,2,3,4,5,6,7,8,9]
const filterPair = numb => numb.filter(e=(numb)=>numb %2==0)

console.log(filterPair(numb))
const arrayNum = [1,2,3,4,5,6,7,8,9,0]
let quadrado = []
arrayNum.forEach(function(x,y){
    quadrado.push("Posicao: "+y)
    quadrado.push(x * x);
    
});

console.log(quadrado)

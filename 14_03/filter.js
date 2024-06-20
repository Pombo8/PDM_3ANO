Array.prototype.caros = function(callback){
    const newArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i],i)
        }
        return newArray;
    }
}




const produtos = [
    {nome: 'notebook', preco: 2499, fragil:true },
    {nome: 'ipad',preco:5099,fragil:true},
    {nome: 'copo',preco:12.49,fragil:true},
    {nome: 'copo_plastico',preco:5.99,fragil:false}
]


//arrow function para definir uma nova função que
//filtra os objetos de produto
let frageis = p => p.fragil;

let caros = p=>p.preco>13.

//filter com função dentro do console.log
console.log(produtos.filter(function(p){
    return p.preco > 2300;
}))

//concatenando varios filter
console.log(produtos.filter(caros).filter(frageis))

//guardando em uma array o restultado de um filter
const produtos2 = produtos.filter(caros);
console.log(produtos2);




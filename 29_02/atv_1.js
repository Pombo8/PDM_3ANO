const pessoa={
    nome: "Zeze de Camargo e Luciano",
    saudacao(){
        console.log("ola meu nome eh"+this.nome)
    }
}
function saudar(){
    pessoa.saudacao()
}
const saudarFunction = pessoa.saudacao.bind(pessoa);
saudarFunction();
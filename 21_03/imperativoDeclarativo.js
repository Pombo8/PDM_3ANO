const alunos = [
    {nome: 'João', nota: 7.9 },
    {nome: 'Maria', nota: 9.2}
]


//imperativo preocupacao de como vai ser feito
let total1 = 0;

for(let i =0;i<alunos.length;i++){
    total1+=alunos[i].nota;
}

console.log(total1/alunos.length)


//declarativo preocupacao com oque vai ser feito
const getNota = aluno => aluno.nota;
const getSoma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(getSoma)

//podemos escrever assim
const total3 = alunos.map(e= aluno=> aluno.nota).reduce(e= (total, atual) => total+ atual)
console.log(total2/alunos.length, total3/alunos.length
)

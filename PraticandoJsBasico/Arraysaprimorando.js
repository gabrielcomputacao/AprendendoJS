//metodos importantes

const pilotos =['vetel','massa','Alonso']

pilotos.pop() //remove o ultimo piloto da lista
console.log(pilotos)

pilotos.push('estela')//adiciona na ultima posicao
console.log(pilotos)

pilotos.shift()//remove o primeiro
pilotos.unshift('hamilton')//adiciona no primeiro da lista

//splice pode adicionar e remover elementos
//adiciona na segunda posicao,nao remove nada, e adiciona os dois nomes escritos
pilotos.splice(2,0,'gabriel','leandro')

console.log(pilotos)


const algunsPilotos = pilotos.slice(1)//novo array, ele pega a apartir de indice que voce colocoue gera novo array
console.log(algunsPilotos)
//pode tambem colocar um intervalo a ser pego
const algusnPilotos2 = pilotos.slice(0,2)
console.log(algusnPilotos2)//pega começando no zero e vai ate o 2 mas nao pega o indice 2



let aprovados = ['gabi','ted','link','maria']

//o foreach percorre o array retornando o proprio valor e o indice que estava no array
aprovados.forEach((nome,indice)=>{
    console.log(nome,"indice do array" +(indice+1))
})

aprovados.forEach((indice)=> console.log(indice))//indice sempre é passado em segundo
//OBS: no foreach um terceiro parametro é passado que é o proprio array

// criando o proprio foreach para melhor entendimento

Array.prototype.forEach2 = function (callback){
    for(let i=0 ; i < this.length ; i++){
        callback( this[i] , i , this)
    }
}

aprovados.forEach2(function (nome,indice){
    console.log(nome,indice)
})



//map faz um tranformação no array e o passa para outro array

const nums = [1,2,3,4,5]
//map é um for com proposito
//map aceita uma callback que pode receber tres parametros, valor,indice e o array em questao
let resultado = nums.map((e) =>{
    return e *2
})

let teste = nums.forEach((e)=>{
    return e *2
})
console.log("\n"+teste+"\n")

console.log(resultado)

//map nao transforma o array atual, so forma um novo array

const soma = e => e + 10
const triplo = function (e){
    return e * 10
}

//map criado a mao
Array.prototype.map44=function(callback){
    let array1 = new Array
    for(let i=0 ; i < this.length ; i++){
        array1.push(callback(this[i],i,this))
    }
    return array1
}

let arr=[1,2,3,4,5]
console.log("\n!!!! "+ arr.map44((e)=> e+50)+" !!!\n")

//passa para ponto flutuante o valor recebido,fixa 2 casas decimais,replace troca ponto por virgula
const passarParaDinheiro = (e)=>{ return ` R$ ${parseFloat(e).toFixed(2).replace('.',',')} `}

let resultado1 = nums.map(soma).map(triplo).map(passarParaDinheiro)
console.log(resultado1)


const carrinho = [
    '{"nome": "Boracha" , "preco": 3.45}',
    '{"nome": "caderno" , "preco": 6.45}',
    '{"nome": "kit de lapis" , "preco": 41.22}',
    '{"nome": "Caneta" , "preco": 7.50}'
]


// retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let testinho = JSON.parse(carrinho[0])
console.log(testinho,testinho.preco)

console.log(paraObjeto('{"nome": "Boracha" , "preco": 3.45}'))

const mostraResultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(mostraResultado)

// Filter ------

const prod =[
    {nome:'noot', preco:2499,fragil:true},
    {nome:'ip pad', preco:15000,fragil:true},
    {nome:'ncopo de vidro', preco:20,fragil:true},
    {nome:'copo de plastico', preco:12.55,fragil:false}          
]

console.log(prod.filter(function(p){
    return p.preco > 1000
}))

const testando = prod.filter(function(p){
        return p.fragil
}).filter((p)=>{
    return p.preco > 10000
})

console.log(testando)
//filter criado a mao

Array.prototype.filter77=function(callback){
    let array2 = new Array
    for(let i=0 ; i < this.length ; i++){
        if(callback(this[i],i,this))
        array2.push(this[i])
    }
    return array2
}

let arrum = [35,88,9,96,74,32]
console.log("\n\noioi  " + arrum.filter((e)=>{
    if(e % 2 === 0){
        return e
    }
}))


// Reduce -----

const alunos =[
    { nome: 'Joao', nota:7.3 , bolsista:true},
    { nome: 'JMaria', nota:5 , bolsista:true},
    { nome: 'Pedro', nota:8.3 , bolsista:false},
    { nome: 'Ana', nota:6.6 , bolsista:true}
]
//resumo

//map traz a mesma quantidade para um novo arry, só que mudando elementos
//filter filtra agluns elementos e cria um novo array
//reduce o ultimo valor da chamada vai para o acumulador, e o atual vai seguindo a sequencia dos indices e
//valores do arrar


console.log(alunos.map(a => a.nota))

const resultando = alunos.map(a =>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual//esse valor vai para o acumulador ate o fim do reduce, a cada iteração é um resultado
})
console.log(resultando)

//desafio 1 : todos os alunos sao bolsistas?
let todosAlunosBolsistas = alunos.map((e)=> e.bolsista).reduce(function (acum,atual){
    return acum && atual
})

console.log(todosAlunosBolsistas)


//Desafio 2 : Algum aluno é bolsista?

let algumAluno = console.log(alunos.map((e)=>e.bolsista).reduce(function(e,atual){
    console.log(e)
    return e || atual

}))

console.log(algumAluno)



Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i ; i < this.length ; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

//modo declarativo = usando funções já disponiveis no array como reduce, map
/*Importa o que tem que ser feito, nao importa como*/

//modo imperativo = fazer um for envolvendo varias interações
/*Importa como as coisas tem que ser feita*/

//---------Funcao Concat , nao mexe nao funções, somente gera um array com a concatenação

let predio = [1,2,3,4,5]
let rua = [6,7,8,9,10]

const todos=predio.concat(rua)

console.log(todos)

//FlatMap ----
/*le concatena array com array para gerar um array geral
    Para não utilizar um array de array , ele tranforma tudo em um array só
*/





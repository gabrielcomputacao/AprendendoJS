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
//passa para ponto flutuante o valor recebido,fixa 2 casas decimais,replace troca ponto por virgula
const passarParaDinheiro = (e)=>{ return ` R$ ${parseFloat(e).toFixed(2).replace('.',',')} `}

let resultado1 = nums.map(soma).map(triplo).map(passarParaDinheiro)
console.log(resultado1)
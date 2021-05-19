

const passo1 =(recebe,next)=> {
    recebe.valor1 = "mid1"
    next()
}

const passo2 = (recebe,next)=>{
    recebe.valor2 = "mid2"
    next()
}

const passo3 = (recebe)=> recebe.valor3="mid3"

//OBS: no express essa funcao middleware tem 3 parametros requisicao,resposta e o next

//O padrao de projeto é uma solução de um problema recorrente, mas cada vez que voce implementa voce tem que
//adaptar para cada problema

const exec = function (ctx,...midd){// ... forma reste, junta todos parametros e faz virar um array
    const ProxPasso = indice =>{
        midd && indice < midd.length && //avaliando se o array é true(diferente de null e o indice menor que o tamanho)
        midd[indice](ctx,()=> ProxPasso(indice + 1))
        //pega o indice do array, e chama as funcoes passando os parametros das funcoes que estao no array
    }
    ProxPasso(0)
}

const recebe={}
exec(recebe,passo1,passo2,passo3)
console.log(recebe)
function funcionarouNao(valor,chanceError){

   return  new Promise((resolve,reject)=>{
        if(Math.random() < chanceError){
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}

funcionarouNao("testando", 1).then(
    v=>console.log(v),
    err => console.log(`Erro especifico : ${err}`))
.catch(err => console.log("\n"+ err))

//depois do catch, nao passa mais informacao , o catch faz o tratamento de erro

//tem como tratar um erro dentro do then, o primeiro é a resultado, o segundo parametro é o tratamento de erro

//
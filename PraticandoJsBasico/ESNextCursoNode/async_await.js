//usado com promisses, para tornar seu codigo assincrono em sincrono
/*Simplificar o uso de promisses*/

const http = require('http')

const getTurma = (letra)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve,reject)=>{

        http.get(url, res=>{
            let resultado =''
            //evento de resposta
            res.on('data', dados =>{
                resultado += dados
            })
        res.on('end',()=>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }  
            })
            //no final quando tudo estiver chegado, passa a callback devolta para a constante getTurma 
            //para receber os dados já transformados
        })
    })
}

let obterAlunos = async() =>{
    const turmaA = await getTurma('A')//apliquei o resultado da funcao a constante turmaA
    const turmaB = await getTurma('B')//apliquei o resultado da funcao a constante turmaB
    const turmaC = await getTurma('C')//apliquei o resultado da funcao a constante turmaC
    return [].concat(turmaA,turmaB,turmaC)
}// retorna um objeto do tipo asyncfuction

    obterAlunos().then(alunos => alunos.map(a=>a.nome))
    .then(nomes => console.log(nomes))

    
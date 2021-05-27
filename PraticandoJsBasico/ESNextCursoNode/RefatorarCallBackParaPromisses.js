// com promisse

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

let nomes = []
getTurma('A').then(alunos=>{
    nomes = nomes.concat(alunos.map(a =>`A: ${a.nome}`))
getTurma('B').then(alunos=>{
        nomes = nomes.concat(alunos.map(a => {return `B: ${a.nome}`}))
        console.log(nomes)
    })
})    

//outros jeitos de chamar varia promisses
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(turmas => [].concat(...turmas))//cancatenar tudo em um array so
.then(alunos => alunos.map(aluno => aluno.nome))//do array que tem tudo, fizemos um map para ele retornar 
//somente os nomes, pois o map faz isso de retornar um array so com o que foi pedido
.then(nomes => console.log(nomes))


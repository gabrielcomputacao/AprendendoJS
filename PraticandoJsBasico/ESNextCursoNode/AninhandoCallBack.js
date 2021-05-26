// sem promisse

const http = require('http')

const getTurma = (letra,callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res=>{
        let resultado =''
        //evento de resposta
        res.on('data', dados =>{
            resultado += dados
        })

    res.on('end',()=>{
            callback(JSON.parse(resultado))
        })
        //no final quando tudo estiver chegado, passa a callback devolta para a constante getTurma 
        //para receber os dados já transformados

    res.on('error', err =>{
        console.log(err)
    })

    })

   
}

let nomes = []
getTurma('A',alunos=>{
    nomes = nomes.concat(alunos.map(a =>`A: ${a.nome}`))
    //console.log(alunos)
    //console.log(nomes)
    getTurma('B',alunos=>{
        nomes = nomes.concat(alunos.map(a => {return `B: ${a.nome}`}))
        console.log(nomes)
    })
    
})

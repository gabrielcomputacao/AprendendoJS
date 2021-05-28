const fs = require('fs')


const caminho = __dirname + "\\arquivotxt.txt"

//console.log(caminho)

function lerArquivo(caminho){
    return new Promise((resolve,reject)=>{
         fs.readFile(caminho,"utf-8",(err,conteudo)=>{
                conteudo != undefined ? resolve(conteudo) : reject(err)
         })
        
    })
}

lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
.then(linhas => console.log(linhas[3]))

//console.log(conteudo)


//requirindo um modulo que já vem do javaScript o modulo fs --> file System
const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//__dirname é uma cosntante que está presente em todos os diretorios de documentos do javascript,mostrando
//o caminho, a localidade, O CAMINHO DO DIRETORIO

//sincrono..(vai ficar parado esperando ler o arquivo, se for algo grande demora muito pode gerar problemas)
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//json é um tipo stirng, precisa fazer um json ponto parse para transformar ele em um objeto

//assincrono...Nessa caso passa um callback
fs.readFile(caminho,'utf-8',(err,conteudoNovo)=>{
    const config = JSON.parse(conteudoNovo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

//No caso de json nao precisa fazer o file System , pode fazer direto

const configuracao = require('./arquivo.json')
console.log(configuracao.db)
console.log(configuracao.db.port)
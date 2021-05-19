//porta é um processo do computador, dentro da maquina que recebe a requisicao tem varias aplicação que
//estao comunicando pela rede, por isso, a porta serve para o processo ser encontrado na rede é unica por
//processo

const porta = 3003
const express = require('express')
const app = express()
const body = require('body-parser')
const bancoDados = require('./MiniBancoDados')

app.use(body.urlencoded({extended:true}))


app.get('/produtos',(req,res,next)=>{
    //res.send({nome:"noot" , preco:2000})converte para jSON o metodo send já faz isso
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) =>{
    const produto = bancoDados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//JSON
})


app.listen(porta , ()=>{
    console.log(`Servidor rodando na porta: ${porta}`)
})
//porta é um processo do computador, dentro da maquina que recebe a requisicao tem varias aplicação que
//estao comunicando pela rede, por isso, a porta serve para o processo ser encontrado na rede é unica por
//processo

const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos',(req,res,next)=>{
    res.send({nome:"noot" , preco:2000})//converte para jSON o metodo send já faz isso
})

app.listen(porta , ()=>{
    console.log(`Servidor rodando na porta: ${porta}`)
})
const express = require("express")

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios', (req,resp) =>{
    console.log(req.body)
    resp.send('<h2>Voce clicou no input</h2>')
})

app.post('/usuarios/:id', (req,resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h2>Voce clicou no input</h2>')
})

//quando faz um requisicao tipo GET os dados do formulario vem por forma de query
// req.query para pegar os dados do formulario

app.listen(3003)
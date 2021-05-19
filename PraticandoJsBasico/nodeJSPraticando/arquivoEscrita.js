const fs = require('fs')

const produto ={
    nome: 'Celular',
    preco : 1200,
    desconto:0.5
}

fs.writeFile(__dirname+"/arquivoCriado.json",JSON.stringify(produto), function (err){
    console.log(err || "salvo!!")
})


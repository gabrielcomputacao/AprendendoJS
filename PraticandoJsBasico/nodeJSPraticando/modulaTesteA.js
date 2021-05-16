//requirindo os exports do modulo A
const modulaA = require('./moduloAJS')

console.log(modulaA.ola)
console.log(modulaA)

//requirinado um modulo de terceitos , testando com lodash
const a = require('lodash')//quando faz isso ele espera requirir o modulo index do lodash
console.log(a.random(1,300)) //funcao random vem do modulo requirido lodash(função randomica)

//setInterval(()=>console.log(a.random(10,29),),2000)

const importacaoConta = require('../FuncoesJS')
console.log(importacaoConta.nome)


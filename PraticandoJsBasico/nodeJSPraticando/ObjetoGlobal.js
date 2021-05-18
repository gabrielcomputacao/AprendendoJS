//existe no node um objeto global que se chama global
console.log(global)

//quando o Js faz o require de um Objeto voce tem esse cache desses objeto em todos os requires que for chamado
//daquele mesmo lugar, ex:require(./pasta) e chamar outro require do mesmo, o cache é levado para todas
//varaveis criadas desse arquivo

console.log()

//this é um objeto que aponta para module.exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('dentro da funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra saida'
}

let nome = 'gabigol'
let tempo = 'corre'

console.log(`corre amigao ${nome} voce esta , ${tempo}`)
//chamando com a funcao tag que criei
console.log(tag`corre amigao ${nome} voce esta ,${tempo}`)
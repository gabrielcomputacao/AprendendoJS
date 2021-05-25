//for Of percorre valores, e não indices
for(let letra of "cod3r"){
    console.log(letra)
}

//for in percorre indices
console.log('\n\n')
for(let i in "cod3r"){
    console.log(i)
}

const assunto = ["tes","ted","maria"]

for(let assunt of assunto){
    console.log(assunt)
}

const mapeando = new Map([
    ['Mapa1',{nome:'gabriel'}],
    ['chavinha','podecre']
])

    console.log("\n\n------")
for(let fin of mapeando){
    console.log(fin)
}

for(let fin of mapeando.keys()){
    console.log(fin)
}
for(let fin of mapeando.values()){
    console.log(fin)
}

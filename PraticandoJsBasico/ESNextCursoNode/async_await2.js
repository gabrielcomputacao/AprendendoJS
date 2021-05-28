function esperarPor(tempo = 2000){
return new Promise((resolve)=>{
    setTimeout(function (){
        
        resolve()
    },tempo)
})

}

//await nao pode ser usado sozinho

esperarPor().then((r) => console.log(r))
.then(v => console.log(v))

// ------------------------

async function executar(){
    //sem await realiza tudo em paralelo

    esperarPor(1550)
    console.log('async/await ... 1')

    esperarPor(1550)
    console.log('async/await ... 2')
    //tempo de execuçao sem await exited with code=0 in 2.35 seconds
}

async function executar1(){
    //com await parece que a funcao ficou sicnrona

    await esperarPor(1550)
    console.log('async/await ... 1')

    await esperarPor(1550)
    console.log('async/await ... 2')
    //tempo de execuçao com  await tempo foi exited with code=0 in 3.62 seconds
}
executar1()

/*Se colocar async a funcao retorna uma Promise,
colocando o await ele pega o valor do resolve

A forma de async/await esta totalmente ligada ao conceito de promise
*/
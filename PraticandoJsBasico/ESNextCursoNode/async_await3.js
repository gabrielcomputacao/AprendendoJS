function gerarNumerosEntre(min,max,numerosProibidos){
    if(min > max) {[max,min] = [min,max]}

    return new Promise((resolve,reject)=>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('numero repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

gerarNumerosEntre(1,5,[1,2])
.then(console.log)
.catch(console.log)

//await so pode ser usado com quem retorna uma promise


function gerarMegaSena(qtdNumeros){

}





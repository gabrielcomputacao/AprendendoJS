let  p = new Promise((resolve,reject)=>{
    try{
        resolve('oi amiguinho')
    }catch(e){
        reject(e)
    }
})

p.then(a => a.concat("kkk")).then(b => console.log(b))

function esperarPor(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(function(){
            console.log('esperando..')
            resolve('voltei rapaziada')
        },tempo)
    })
}

let o = esperarPor(3000)
o.then(texto => console.log(texto))

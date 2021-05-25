/*
    promeça, faz assincronamente
    vc promete faz alguma coisa, isso se dá assincronamente,parecido com callback
    estrutura com objeto de uma funcao assincrona, que trabalha com promeça
*/

function falarDepoisDe(segundos,frases){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(frases)
        },segundos * 1000)
    })
}
/*Explicando a funcao
    funcao recebe dois parametros
    retorna uma promeça
    o settimeout da o tempo de execução
    e quando a promessa for atendida ele retorna o resolve

*/

//acessar o reusltado de uma promessa atendida com sucesso usar o then
falarDepoisDe(3,'top').then(frases => frases.concat('??!'))                                                     



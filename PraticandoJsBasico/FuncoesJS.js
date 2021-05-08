//funcoes em JS é Fist-Class
//linguagem trata funcao como dado


//criar de forma literal
function fun1(){
    // caso nao retorna nada, ele pelo menos retorna o Undefined
}

//armazenar em uma variavel
const a = function (){console.log("oioi")}

a()

const array = [fun1,a]

console.log(array[1]())


//funcao pode conter/retorna uma outra função


function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(4,4)(4)

//parametros variaveis
//toda função tem esse array disponivel
function somando(){
    let soma=0
    for(i in arguments)/*parametros passados, mesmo nao recebendo parametro*/{
        soma += arguments[i]
    }
    return soma
}

console.log(somando(2,3,4))

//parametro padrao

function soma5(a=1,b=2,c=3){
    return a + b + c
}

console.log(soma5(0,6,7))
console.log(soma5(0,0,0))
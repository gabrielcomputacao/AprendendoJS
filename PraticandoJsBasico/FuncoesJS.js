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


// quando se chama uma funcao normal definido com function, o this pode variar
//com arrow function o this nao varia nunca, o this pega o contexto que foi escrito a função

const f3 = () => console.log("\n\nfuncao arrow")
f3()


//funcao bind, passa um objeto para a função que sempre vai amarrar um objeto para ele ser o dono da execução
//daquele objeto, exemplo:

const pessoa ={
    nome:"gabriel",
    falar(){
        console.log("oioi,obm dia "+ this.nome)
    }
}

pessoa.falar()
const fal = pessoa.falar

fal()

const fal1 = pessoa.falar.bind(pessoa)


fal1()

//arrow function
 //maneiras de se criar funcoes arrow

 //normal
 let dobro = function (a){
     return 2 *a
 }

 dobro = (a) =>{
     return 2 * a
 }

 //quando se tem apenas uma linha a funcao arrow pode ser chamada resumidamente
 dobro = a => 2 *a//retorno implicito

 console.log(dobro(Math.PI))

 let ola = function (){
     return "ola"
 }

 ola = () => "ola1"

 console.log(ola())

/// ------

function Pessoa(){
    this.idade=0
        setInterval(()=>{
           this.idade++
           console.log(this.idade)
        },1000)
  
}

let comparThisArrow = param =>console.log(this === param)

comparThisArrow(global)
comparThisArrow(module.exports)

//module.exports é o arquivo que voe esta escrevendo no momento dentro do node

/*funcao anonima*/

let adicionando = function (a,b){
    return a+b
}

console.log(adicionando(1,1))
//arrow sempre e uma funcao anonima

//Funções CallBack

const fabricantes = ["merces","fiat","porshe"]

function imprimir(nome,indice){
    console.log(`${indice} + mais o ${nome}`)
}

//o proprio foreach passa os parametros que ele vai percorrendo do array, tanto indicie quanto nome
fabricantes.forEach(imprimir)
fabricantes.forEach((a,b)=>console.log(a,b))


const notas = [1.1,7,4.6,7.8,9.9,4.5,8]

let notasbaixas=[]
//sem callback
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

// com callback usando a funçao filter chamada a cada indice do array nota
notasbaixas = notas.filter((notas) =>{
    return notas < 7
})

console.log(notasbaixas)

// -----------

// funcao construtora

function carro (veloMaximo=200,delta=5){
    //atributo privado
    let veloAtual=0

    //metodo publico
    this.acelerar = () =>{
        if(veloAtual + delta <= veloMaximo){
                veloAtual +=delta
        }else{
            veloAtual = veloMaximo
        }
    }

    //metodo publico
    this.getVelocidadeAtual= function(){
        return veloAtual
    }
 }   

    const uninho = new carro
    uninho.acelerar()
    console.log(uninho.getVelocidadeAtual())

const ferrari = new carro(300,20)

ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

//closures --- conceito importante no linguagem javascript

/*
 Closure é o escopo criado quando a funcao é declarada
 Esse escopo permite a funcao acessar e manipular varaveis externas a funcao
*/


const x = "Global"

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

let minhaFuncao = fora()
//como dentro foi criado dentro do escopo da funcao fora, entao ele acha primeiro a contante X de dentro
//da funcao
console.log(minhaFuncao())


//Funcao Factory----traducao(funcao fabrica)

//funcao Factory simples, retorna um objeto, sempre criando uma nova instancia do obj, cria apenas de chamar
//a funcao factory

function criarPessoa(){
    return {
        nome:'ana',
        idade:12
    }
}

console.log(criarPessoa())


function criarProduto(nome1,preco){
    //quando o nome do parametro for igual ao nome do atributo do objeto, nao precisa colocar os dois pontos
    //igual no exemplo do preco
    let obj={
        nome:nome1,
        preco,
        desconto:0.1
    }
    return obj
}

console.log(criarProduto('gab',12))

//acesso como class

class Pessoinha{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`oi meu nome é ${this.nome}`)
    }
}

const p4 = new Pessoinha('carlos')
console.log(p4.falar())

//OBS:
/*
    Class o constructor fica dentro da funçao
    Funcao construtora os atributor sao passados como parametro
    funcao factory retorna um objeto mais simplificado
*/


//Funcoes auto invocadas
//IIFE => immediatly invoked FUnction Expression (funcao invocada imediatamente)
//envolvendo a funcao entre parentes no começo do codigo  depois colocando parentes depois de acabar
// a funcao e auto invocada imeditamente


//Termos call e apply

function getPreco(imposto=0,moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} ` 
}

const conta = {
    nome:'carro',
    preco:4589,
    desc:0.15,
    getPreco
}

const carro1 = { preco:30000 , desc:0.2}
 
//entro o call o aplly o que diferencia é a passagem dos parametros
//call diretamente na funcao
//apply passa por meio de um array os parametros
console.log(getPreco.call(carro1))
console.log(getPreco.apply(carro1))

module.exports=conta
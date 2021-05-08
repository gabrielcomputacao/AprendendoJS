
const prod ={}

prod.nome="gabriel"
prod.idade=13
prod["amigo"] = "rafael"


console.log(prod)

console.log(prod.amigo)

//Json é um formato Textual, diferente de Objeto que é codigo atributos e funções

//efeito Hosting, jogada para cima,(parece que nao está com o efeito hosting no caso o A esta undefined)

console.log("variavel a="+ a)
var a = "oi amigo"

let saudacao = "opa!!"

function exercicio(){
    const saudacao = " e aeee"
    return saudacao
}

console.log(saudacao)

saudacao= exercicio()
console.log(saudacao)

//operados Destructing

let pessoa ={
    nome:"Ana",
    idade:12,
    endereco :{
        rua:"ceu",
        bairro:"azul"
    },
    arrayTeste:[1,2,3,4,5]
}

console.log(pessoa)


//operador destructing

const {nome, idade} = pessoa
console.log(nome)

console.log(pessoa)

console.log(pessoa.endereco.bairro)

console.log(pessoa.arrayTeste[3])


// para arrays o destructing usa os colchetes
let trab1,trab2

const sorvete = trab1 || trab2

console.log(sorvete)

//operado ternario
let resultado = nota => nota >= 7 ? "Aprovado" : "negativo"

console.log(resultado(7.1))

function tratarError(e){
    throw "deu ruim"
}


function gritar(obj){
    try{
        console.log(obj.name.toUpperCase() +"!!")
    }catch(e){
        tratarError(e)
    }
    
}

let obj = {name:"mario"}
gritar(obj)

//teste função e variaveil
/*


const a = function imprimir(){
    console.log("oioi")
}

imprimir()
*/

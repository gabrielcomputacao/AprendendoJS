//criacao de objeto

//usando a forma literal
const obj ={}

//Object em JS
const obj1 = new Object
console.log(obj1)

//FUncoes construtoras
function Produto(name, preco){
    this.name=name//this. faz com que o atributo fique publico
    this.getPreco = () =>{
        return preco 
    }

}

let p1 = new Produto('martelo',34)
console.log(p1.getPreco())

//Funcao Factory

function criarFuncionario(salario,faltas){
    return {
        nome:'jaiminho',
        salario:salario,
        faltas,
        getSalario(){
            return salario+100
        }
    }
}

const f1 = criarFuncionario(100,2)
console.log(f1.getSalario())

//Uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info":"sou um json"}')
console.log(typeof fromJSON)
console.log(fromJSON)



//-----------------------------------------------------------
//congela o objeto e nao consegue mais mexer nele, nao deixar mudar nada nem excluir
Object.freeze(p1)
p1.name='testando'
console.log(p1.name)

const valor = 13
const obj33 = {}
obj33['nomeValor']=valor
console.log(obj33.nomeValor)


//setter e getter

let sequencia ={
    _valor:1,//convenção do anderline que a variavel está privada
    nome:'maluquinho',
    get valor(){ return this._valor++},
    set valor(valor){ this._valor=valor}
}

console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor=44
console.log(sequencia.valor)
console.log(sequencia.valor)

//funcoes importantes de Object


let pessoinha1={
    nome:'pessoa',
    peso:12,
    idade:2
}


//pegar todas as chaves do objeto
console.log(Object.keys(pessoinha1))
//pegar os valores atribuidos as chaves
console.log(Object.values(pessoinha1))
//pegar a transformar os pares chave e valor em um array
console.log(Object.entries(pessoinha1))

//cada percorrida do foreach ele tras um array de duas posições
//usando o destructing quebrei essas duas posições para gerar separadamento a posicao1 e posicao2 dos resultados
//do array maior que resulta em array menores, isso é devido a funcao entries
Object.entries(pessoinha1).forEach(([amor,valor]) =>{
    console.log(amor,valor)
})

//definindo propriedade no objeto
Object.defineProperty(pessoinha1,'dataNascimento',{
    //nao deixar listar as chaves do objeto, mas é possivel acessa-lo
    enumerable:true,
    writable:false,//nao deixa o atributo ser alterado
    value:'01/24/1997'
})

console.log(pessoinha1.dataNascimento)

//Object.assign concatena objetos
const dest = {a:1}
const o1={b:2}

const obj12= Object.assign(dest,o1)
console.log(obj12,dest,o1)

//Hernaça testes, observando como funciona em javacript
let ferrari={
    modelo:'f40',
    velocidade:200
}

let volvo={
    modelo:'v40',
    velocidade:156
}

//Em java script as heranças são de prototipos, se o programa nao acha uma determinada variavel na primeira
/*camada do programa, ele vai subindo as camadas que são prototipos para achar o valor correspondente procurado
por isso, se nao achar esse valor ele retorna Undefined
*/

//achou o prototipo mas retornou vazio nesse momento, mas já está criado 
console.log(ferrari.__proto__)
//um objeto criado, ele aponta para o atributo da funçao OBject.prototype, nivel mais alto de prototype
console.log(ferrari.__proto__ === Object.prototype)


// Cadeia de prototipos {prototype chain}
const avo = { att1:'A'}
const pai = {__proto__:avo,att2:'B'}
const filho = {__proto__:pai,att3:'C'}
//achou o atributo , pois procurou no filho,depois no pai e finalmente encontrou no avo
console.log(filho.att1)

//se ele já achar o atributo no primeiro prototipo, acontece o efeito shadowing(sombreamento),ele para no primeiro

let aviao={
    asa:12,
    roda:2,
    status(){
        return `tem asa medindo ${this.asa} e numero total de rodas e : ${this.roda}`
    }
}

let aviaozinho={
    cor:'azul'
}

//para falar que um objeto tem o outro como prototipo usase setprototypeOF

Object.setPrototypeOf(aviaozinho,aviao)

//na funcao toString do objeto ele so chama e mostra a do proprio prototipe nao pega os atributos do pai
console.log(aviaozinho)

console.log(aviaozinho.roda)
console.log(aviaozinho.status())




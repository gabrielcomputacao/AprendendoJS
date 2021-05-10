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




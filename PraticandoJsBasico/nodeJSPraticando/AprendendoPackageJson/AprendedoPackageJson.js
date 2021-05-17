//exercicio usando axios, biblioteca instalado e colocada nas dependencias do packagejson

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
let axios = require('axios')

//fazendo uma requisitação nessa url e vai trazer os dados da url para o projeto

axios.get(url).then( response =>{
    let funcionarios= response.data
    //console.log(funcionarios)

    let funcionarios_China = funcionarios.filter((e)=>{
        return e.pais === 'China'
    }).filter((sexo) =>{
        return sexo.genero === 'F'
    })

    console.log(funcionarios_China)


let comparar=9999999
let menorSalarioChina={}
    for(let i in funcionarios_China){
        if(funcionarios_China[i].salario < comparar){
            comparar = funcionarios_China[i].salario
            menorSalarioChina = funcionarios_China[i]
        }
    }


    console.log(menorSalarioChina)
})



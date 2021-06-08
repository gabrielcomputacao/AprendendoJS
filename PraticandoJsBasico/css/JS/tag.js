document.querySelectorAll('.tag').forEach( item =>{

    /*faz um for para pegar todos elementos escritos com a classe .tag
        pega o nome da tag que a classe se encontra . EX:div,p,span   e transforma em lower case
    */
    const itemAlocado = item.tagName.toLowerCase()

    //pega o elemento e da uma borda dessa cor para ele
    item.style.borderColor = '#616161'

    //se no elemento nao conter a class nolabel(inventada) ele entra para o se
    if(!item.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = itemAlocado
        item.insertBefore(label,item.childNodes[0])
    }

})
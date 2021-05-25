//o set nao aceita repetição e nao tem indice, nao é indexada

const times = new Set()
times.add('cruzzeiro')
times.add('sao paula').add('Palmeiras')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'),times.has('Palmeiras'))
//nao aceita repeticao
//nao existe indice

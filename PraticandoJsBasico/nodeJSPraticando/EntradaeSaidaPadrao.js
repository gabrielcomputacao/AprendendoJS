const anonimo = process.argv.indexOf('palavra digitada') !== -1

process.stdout.write("informa o nome:")
process.stdin.on('data', data =>{
    process.stdout.write(`oi amigao, ${data}`)
})
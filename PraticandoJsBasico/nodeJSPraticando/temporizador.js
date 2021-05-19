//schedule é um forma de temporizador com muito mais funcoes, existe algumas proprias do JS
//set intervale, settime, mas o schedule tem muito mais opcoes

const schedule = require('node-schedule')

/*para realizar de 5 em 5 segundos, ignorando os minutos, na hora 7, ignirando o dia do mes,ignorando o mes
e o ultimo numero é o dia da semana no caso domingo começa com zero 0*/
const tarefa1 = schedule.scheduleJob('*/5 * 8 * * 3',()=>{
    console.log('Executando Tarefa 1:',new Date().getSeconds())
})
//.cancel() pode cancelar o temporizador criado no sheduleJob
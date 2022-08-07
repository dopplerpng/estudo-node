const http = require('http') //importando http
const porta = 3003 //criando uma porta
const app = require('./app') //importando o app
const server = http.createServer(app) //criando um server e passando como parâmetro o app.js



app.listen(porta, () =>{ //indicando a porta que será "escutada"
    console.log("Server rodando...")
})
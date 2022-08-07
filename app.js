const express = require('express')
const app = express()

const routerProduction = require('./routers/produtos') //Aqui estou importando as rotas
const routerHome = require('./routers/home')


app.use('/produtos', (routerProduction)) //Aqui estou forçando o app a executar as middlewares que tem no modulo de rotas e indicando a url no qual o modulo irá executar

app.use('/', (routerHome))

module.exports = app
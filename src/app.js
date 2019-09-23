const express = require('express')
const app = express()

//Rotas
const index = require('./routes/index')
const alunasRoute = require('./routes/alunasRoute')

//mostrar (ou só mencionar) tbm o modulo CORS do express
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.use('/', index)
app.use('/alunas', alunasRoute)

module.exports = app

//criando o servidor
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')//pegando nossas rotas

const server = express()


//use é um middlware
server.use(express.urlencoded({ extended: true}))//linha responsável por fazer funcionar o req.body
server.use(express.static('public'))//pra ler a pasta public para pegar o styles e os scritps
server.use(routes)//para o servidor usar o routes

//configuração da view engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})


//colocando o servidor online
server.listen(5000, function(){//vai ficar ouvindo a porta 5000
    console.log("server is running")
}) 

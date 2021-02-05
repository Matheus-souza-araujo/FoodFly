const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')//pegando nossas rotas
const server = express()


//use é um middlwares
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})



server.listen(5000, function(){//vai ficar ouvindo a porta 5000
    console.log("server is running")
}) 

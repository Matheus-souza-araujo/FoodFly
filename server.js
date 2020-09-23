const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receita = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("initial", {items: receita})
})

server.get("/about", function(req, res){
    return res.render("about")
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: receita})
})


server.get("/preparation/:index", function(req,res) {
    const recipeIndex = req.params.index

    if (!receita[recipeIndex]) {
        return res.render('not-found')
    }
    return res.render('preparation', { items: receita[recipeIndex]})


})

server.listen(5000, function(){
    console.log("server is running")
})


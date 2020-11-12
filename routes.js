//configurando as rotas
const express = require('express')
const routes = express.Router() //torna nossa variavel responsavél pelas rotas
const recipes = require('./controllers/admin')
//rotas usuário normal
routes.get('/',function(req, res){
    return res.redirect('/users')
})
routes.get('/users', function(req, res){
    return res.render("users/initial")
})
routes.get("/users/about", function(req, res){
    return res.render("users/about")
})
routes.get("/users/recipes", function(req, res){
    return res.render("users/recipes")
})
routes.get("/users/preparation/:index", function(req,res) {
    const recipeIndex = req.params.index

    if (!receita[recipeIndex]) {
        return res.render('not-found')
    }
    return res.render('preparation', { items: receita[recipeIndex]})


})

//rotas para o admin

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas

module.exports = routes //exporta nosssas rotas
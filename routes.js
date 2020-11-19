//configurando as rotas
const express = require('express')
const routes = express.Router() //torna nossa variavel responsavél pelas rotas
const recipes = require('./controllers/admin')
const users = require('./controllers/users')
//rotas usuário normal
routes.get('/',function(req, res){
    return res.redirect('/users')
})
routes.get('/users', users.index)
routes.get("/users/about", users.about)
routes.get("/users/recipes", users.recipes)
routes.get("/users/preparation/:id", users.preparation)

//rotas para o admin

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas

module.exports = routes //exporta nosssas rotas
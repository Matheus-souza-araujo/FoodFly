//configurando as rotas
const express = require('express')
const routes = express.Router() //torna nossa variavel responsavél pelas rotas
const recipes = require('./controllers/recipes')
const users = require('./controllers/users')
//rotas usuário normal
// routes.get('/',function(req, res){
//     return res.redirect('/')
// })
routes.get('/', users.index)
routes.get("/about", users.about)
routes.get("/recipes", users.recipes)
routes.get("/preparation/:id", users.preparation)

//rotas para o admin


routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita
module.exports = routes //exporta nosssas rotas

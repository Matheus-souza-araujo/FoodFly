const fs = require ('fs')//file system, para guardar nossos arquivos
const data = require("../data.json")
const { json } = require('express')


module.exports = {
    index(req, res){
        return res.render("admin/index", { recipes: data.recipes})
    },

    show(req, res){
        const { id } = req.params // fazendo o di virara uma variavel com a desestruturação

        const foundRecipe = data.recipes.find(function(recipe){
            return recipe.id == id
        })
 
        if (!foundRecipe){
            return res.send("Not found recipe!")
        }

        const recipe = {
            ...foundRecipe
        }

        return res.render("admin/detail", {recipe})
    },

    edit(req, res){
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe){
            return recipe.id == id
        })

        if (!foundRecipe){
            return res.send("Not found recipe!")
        }

        const recipe = {
            ...foundRecipe
        }

        return res.render("admin/edit", {recipe})
    },

    create(req, res){
        return res.render("admin/create")
    },

    post(req, res){
        //validando se todos os dados estão preenchidos ou não
        const keys = Object.keys(req.body)//pega somente nossas chaves, os nomes do campos que pedimos

        for (key of keys) {
            //é o mesmo que fazer req.body.key = "" 
            if(req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }

        let { image, ingredients, steps, information } = req.body//id não está na desistruturação pois não veio no nosso body

        const id = Number(data.recipes.length + 1)

        data.recipes.push({
            id,
            image,
            ingredients,
            steps,
            information
        })//vai adicionar o req.body no nosso array, por causa do push

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if (err) return res.send("Write file error!")

            return res.redirect("/admin/recipes/")
        })

        // return res.send(req.body)
    }


}

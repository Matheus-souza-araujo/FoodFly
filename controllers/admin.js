const fs = require ('fs')
const data = require("../data.json")
const { json } = require('express')


module.exports = {
    list(req, res){
    return res.render("admin/index", { recipes: data.recipes})
    },

    detail(req, res){
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
    }


}

const fs = require('fs')
const data = require('../data.json')
const { json } = require('express')

module.exports = {

    index(req, res) {
        return res.render("users/initial", { recipes: data.recipes })
    },
    
    about(req, res) {
        return res.render("users/about")
    },
    
    recipes(req, res) {
        return res.render("users/recipes", { recipes: data.recipes })
    },
    
    preparation(req, res) {
    
        const { id } = req.params
    
        const foundRecipe = data.recipes.find(function(recipe){
            return recipe.id == id
        })
    
        if (!foundRecipe) return res.send("recipe not found")
    
        const recipe = {
            ...foundRecipe
        }
    
        return res.render("users/preparation", {recipe})
    }
}

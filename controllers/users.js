const fs = require('fs')
const data = require('../data.json')
const { json } = require('express')

exports.index = function (req, res) {
    return res.render("users/initial", { recipes: data.recipes })
}

exports.about = function (req, res) {
    return res.render("users/about")
}

exports.recipes = function (req, res) {
    return res.render("users/recipes", { recipes: data.recipes })
}

exports.preparation = function (req, res) {

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
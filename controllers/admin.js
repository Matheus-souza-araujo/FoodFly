const fs = require ('fs')
const data = require("../data.json")
const { json } = require('express')

exports.index = function(req, res){
    return res.render("admin/index")
}


const fs = require ('fs')
const data = require("../data.json")
const { json } = require('express')


module.exports = {
    list(req, res){
    return res.render("admin/index")
    },

    detail(req, res){
        return res.render("admin/detail")
    },

    edit(req, res){
        return res.render("admin/edit")
    },

    create(req, res){
        return res.render("admin/create")
    }


}

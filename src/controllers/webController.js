const path = require('path');
const fs = require('fs');
const db = require('../database/models/');
const Category = db.Category;

//Express validator
let { check, validationResult, body } = require('express-validator');


const webController = {
    index: function(req,res){
        // let categories = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')));
        //res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        Category.findAll()
        .then(categories=>{
            res.render(path.resolve(__dirname, '..', 'views', 'web', 'index'), { Title: 'Home', categories});
        })
    },
    nosotros: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/web/nosotros'), { Title: 'Nosotros' });
    },
    contact: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/web/contact.html'));
        res.render(path.resolve(__dirname, '../views/web/contact'),{ Title: 'Contacto' });
    }

}
module.exports = webController;
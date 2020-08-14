const fs = require('fs');
const path = require('path');
const db = require('../database/models/')

const Category = db.Category;
const Subcategory = db.Subcategory;

// module.exports = async function (req, res, next) { // es lo mismo que la linea de abajo
module.exports = async (req,res,next) =>{
    let navCat = await Category.findAll()
    res.locals.navCat = navCat;
    let navSubcat = await Subcategory.findAll()
    res.locals.navSubcat = navSubcat;
    return next();
}
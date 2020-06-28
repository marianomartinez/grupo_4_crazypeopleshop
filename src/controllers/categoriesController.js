const path = require('path');
const fs = require('fs');



const categoriesController = {
    showCategoryISkates: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryISkates'), {
            Title: 'Categorías'
        });
    },
    showCategoryQSkates: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryQSkates'), {
            Title: 'Categorías'
        });
    },
    showCategoryAccesories: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/products/category.html'));
        res.render(path.resolve(__dirname, '../views/products/CategoryAccesories'), {
            Title: 'Categorías'
        });
    },
    crud: function (req, res) {
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/categorias.json')))
        res.render(path.resolve(__dirname, '../views/categories/categoriesCRUD'), { Title: 'Categorias', categorias: categorias });
    },
}
module.exports = categoriesController;
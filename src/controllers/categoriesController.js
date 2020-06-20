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
    }
}
module.exports = categoriesController;
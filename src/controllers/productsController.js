const path = require('path');
const fs = require('fs');



const productsController = {

    productDetail: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    },
    crud: function (req, res) {
        //res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
        res.render(path.resolve(__dirname, '../views/products/productsCRUD'), { Title: 'Productos' });
    },


}
module.exports = productsController;
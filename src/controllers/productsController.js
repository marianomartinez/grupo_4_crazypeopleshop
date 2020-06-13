const path = require('path');
const fs = require('fs');



const productsController = {

    productDetail: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/products/productDetail.html'));
        //res.render(path.resolve(__dirname, '../views/web/nosotros'));
    }


}
module.exports = productsController;
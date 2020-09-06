const db = require('../database/models/')
const ProductSizeStock = db.ProductSizeStock;
//Express validator
let { check, validationResult, body } = require('express-validator');


module.exports = [
    body('cantidad').custom(function (value, { req }) {
        if (value > 0) {
            return true
        }
        
        return false
    }).withMessage('La cantidad debe ser mayor a 0'),

    
    body('talle').custom(function (value, { req }) {
        if (value > 0) {
            return true
        }

        return false
    }).withMessage('Debe seleccionar un talle'),


    body('cantidad')
        .custom(async (value,{req}) => {
            let stockCheck = await ProductSizeStock
                .findAll({
                    where: {
                        productId: req.body.producto,
                        sizeId: req.body.talle
                    }
                })
         
            if (Number(stockCheck[0].stock) >= Number(value)) {
                return true;
            } else {
                
                return Promise.reject();
                //return false;
            }
        }).withMessage('No hay stock suficiente.'),
]
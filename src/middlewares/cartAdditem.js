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

]
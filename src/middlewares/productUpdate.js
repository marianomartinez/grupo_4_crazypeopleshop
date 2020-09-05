//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports = [
    check('categoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una categoría'),
    check('subcategoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una subcategoría'),
    check('brand').isLength({ min: 2 }).withMessage('La marca debe tener al menos 2 caracteres'),
    check('model').isLength({ min: 2 }).withMessage('El modelo debe tener al menos 2 caracteres'),
    check('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    check('price').isNumeric().withMessage('El precio debe ser numérico y no estar vacío'),
    check('discount').isNumeric().withMessage('El descuento debe ser numérico y no estar vacío'),
    body('price').custom(function (value) {

        if (value >= 0) {
            return true
        }
        return false
    }).withMessage('El precio debe ser 0 o mayor a 0.'),
    body('discount').custom(function (value) {

        if (value >= 0 && value <= 100) {
            return true
        }
        return false
    }).withMessage('El descuento no puede ser mayor a 100'),
    
    // HAY CONFLICTO CON ESTAS VALIDACIONES
    // --- COMENTAR DESDE ACA ---
    body('stock').custom(function (value) {
       
        if (value == ''){
            return true
        }
        if (value >= 0)  {
            return true
        }
        return false
    }).withMessage('El stock debe ser positivo y numerico'),
    body('size').custom(function (value,{ req }) {
        
        
        if ((value == undefined || value == 'otherSizes') && req.body.stock == '') {
            return true
        }
        if (req.body.stock >= 0 && value > 0) {
            return true
        }
        return false
    }).withMessage('El talle no puede quedar vació si carga stock'),
    body('addSize').custom(function (value, { req }) {
        if (value == undefined && req.body.addStock == '') {
            return true
        }
        if (req.body.addStock >= 0 && value > 0) {
            return true
        }
        return false
    }).withMessage('El talle no puede quedar vació si carga stock'),
    body('addStock').custom(function (value) {
        if (value == '') {
            return true
        }
        if (value >= 0) {
            return true
        }
        return false
    }).withMessage('El stock debe ser positivo y numerico'),
    // --- COMENTAR HASTA ACA ---
 
]
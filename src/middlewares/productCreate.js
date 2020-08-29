//Express validator
let { check, validationResult, body } = require('express-validator');
let path = require('path')

module.exports = [
    check('categoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una categoría'),
    check('subcategoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una subcategoría'),
    check('brand').isLength({ min: 2 }).withMessage('La marca debe tener al menos 2 caracteres'),
    check('model').isLength({ min: 2 }).withMessage('El modelo debe tener al menos 2 caracteres'),
    check('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    check('price').isNumeric().withMessage('El precio debe ser numérico y no estar vacío'),
    check('discount').isNumeric().withMessage('El descuento debe ser numérico y no estar vacío'),
    body('discount').custom(function (value) {

        if (value >= 0 && value <= 100) {
            return true
        }
        return false
    }).withMessage('El descuento no puede ser mayor a 100'),
]
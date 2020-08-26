//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports = [
    check('categoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una categoría'),
    check('subcategoryId').isLength({ min: 1 }).withMessage('Debe seleccionar una subcategoría'),
    check('brand').isLength({ min: 2 }).withMessage('La marca debe tener al menos 2 caracteres'),
    check('model').isLength({ min: 2 }).withMessage('El modelo debe tener al menos 2 caracteres'),
    check('description').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),
    check('price').isNumeric().withMessage('El precio debe ser numérico y no estar vacío')
]
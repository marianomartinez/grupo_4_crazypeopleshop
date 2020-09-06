let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('name').isLength({ min: 1, max: 45 }).withMessage('la categoría no puede quedar vacía ni exceder 45 caracteres'),
    check('description').isLength({ min: 1, max: 500 }).withMessage('la descripción no puede quedar vacía ni exceder 500 caracteres'),


]
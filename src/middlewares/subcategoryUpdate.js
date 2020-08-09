let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('name').isLength({ min: 1 }).withMessage('la subcategoría no puede quedar vacía'),
    check('description').isLength({ min: 1 }).withMessage('la descripción no puede quedar vacía'),


]
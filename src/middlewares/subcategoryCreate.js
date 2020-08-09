let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('name').isLength({ min: 1 }).withMessage('la subcategoría no puede quedar vacía'),
    check('description').isLength({ min: 1 }).withMessage('la descripción no puede quedar vacía'),
    body('categoria').custom(function (value) {

        console.log('selecciono' + value);
        if (value) {
            return true
        }
        return false
    }).withMessage('la categoría es obligatoria'),
    

]
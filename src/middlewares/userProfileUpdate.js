let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('firstName').isLength({ min: 1 }).withMessage('el nombre no puede quedar vacío'),
    check('lastName').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    // check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
    body('password').custom(function (value, { req }) {

        if (value != '') {
            if (value.length > 5 && value.length < 16) {
                console.log('cambio');
                return true
            }
        }
        if (value == '') {
          
            return true
        }
        return false
    }).withMessage('la clave debe ser entre 6 y 15 caracteres'),


    body('password').custom(function (value, { req }) {
      
        if (req.body.password2 == value) {
            return true
        }
        return false
    }).withMessage('Las contraseñas no coinciden'),

]
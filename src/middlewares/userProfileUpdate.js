let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('firstName').isLength({ min: 2 }).withMessage('el nombre debe tener al mínimo 2 letras'),
    check('lastName').isLength({ min: 2 }).withMessage('el apellido debe tener al mínimo 2 letras'),
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    // check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
    body('password').custom(function (value, { req }) {
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        if (value != '') {
            if (regPassword.test(value)) {
                return true
            }
        }
        if (value == '') {
          
            return true
        }
        return false
    }).withMessage('la contraseña debe tener entre 8 y 20 caracteres,una minúscula,una mayúscula,un número y un caracter especial'),


    body('password2').custom(function (value, { req }) {
      
        if (req.body.password == value) {
            return true
        }
        return false
    }).withMessage('Las contraseñas no coinciden'),

]


const db = require('../database/models')

const User = db.User;

//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports = [
    check('firstName').isLength({ min: 2 }).withMessage('el nombre debe tener al mínimo 2 letras'),
    check('lastName').isLength({ min: 2 }).withMessage('el apellido debe tener al mínimo 2 letras'),
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    body('password').custom(function (value, { req }) {
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

        if (regPassword.test(value)) {

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

    body('email').custom(async value => Array.from(await User.findAll()).filter(usuario => usuario.email == value).length > 0 ? Promise.reject("Usuario Existente") : true),
]
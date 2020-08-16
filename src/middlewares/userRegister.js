

const db = require('../database/models')

const User = db.User;

//Express validator
let { check, validationResult, body } = require('express-validator');

module.exports = [
        check('firstName').isLength({min:1}).withMessage('el nombre no puede quedar vacío'),
        check('lastName').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
        check('email').isEmail().withMessage('el formato del mail es erroneo'),
        check('password').isLength({ min: 6, max: 15 }).withMessage('la contraseña debe tener entre 6 y 15 caracteres'),
        body('password').custom(function (value, { req }) {
            if (req.body.password2 == value) {
                return true
            }
            return false
        }).withMessage('Las contraseñas no coinciden'),

        body('email').custom(async value => Array.from(await User.findAll()).filter(usuario => usuario.email == value).length > 0 ? Promise.reject("Usuario Existente") : true),
    ]
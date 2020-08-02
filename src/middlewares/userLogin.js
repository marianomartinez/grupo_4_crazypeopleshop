const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');
let fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models/')


const User = db.User;



//Express validator
let { check, validationResult, body } = require('express-validator');


module.exports = [
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
    body('email').custom(async (value, {req}) => Array.from(await User.findAll()).filter(usuario => (usuario.email == value && bcrypt.compareSync(req.body.password, usuario.password))).length < 1 ? Promise.reject("Credenciales Inválidas") : true),
   

   

    // body('email').custom(function (value, { req }) {

    //     User.findAll({
    //         where: {
    //             email: req.body.email,
                
    //         }
    //     }).then(usuario => {
    //         if(bcrypt.compareSync(req.body.password, usuario.password)){
    //             console.log(usuario);
    //         }
    //     })
    // }
    // )
]
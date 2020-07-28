const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');
let fs = require('fs');
const bcrypt = require('bcryptjs');

//Express validator
let { check, validationResult, body } = require('express-validator');

//Multer Code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/users'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'imagen' + '-' + Date.now() + path.extname(file.originalname));      //UNIQID() --- PHP
    }
})

const upload = multer({ storage })



//Requerir el modulo de los controladores
const usersController = require(path.resolve(__dirname, '../controllers/usersController'));

// Métodos en nuestros controladores: index - show - edit - delete 

router.get('/users/login', usersController.login);
router.get('/users/profileShow', usersController.profileShow);
router.get('/users/profileEdit', usersController.profileEdit);
router.get('/users/register',usersController.register);
router.get('/users/crud', usersController.crud);
router.get('/users/usersCRUD/add', usersController.add);
router.get('/users/detail/:id', usersController.show);
router.get('/users/delete/:id', usersController.delete);
router.get('/users/edit/:id', usersController.edit);


//PUT Y POST
router.get('/users/logout', usersController.logout);
router.post('/users/login',[
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
    body('email').custom(function (value,{req}) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        for (let i = 0; i < usuariosActuales.length; i++) {
            if (usuariosActuales[i].email == value) {
                if (bcrypt.compareSync(req.body.password , usuariosActuales[i].password)) {
                
                   return true;
               };
                   
                
               
            }

        }
        
        return false;

    }).withMessage('el correo eléctrónico no se encuentra registrado')

    ], usersController.processLogin);

// router.post('/users/profileEdit/:id', usersController.profileEdit);

router.put('/users/profileUpdate/:id', upload.single('imagen'),
    [
        check('first_name').isLength({min: 1}).withMessage('el nombre no puede quedar vacío'),
        check('last_name').isLength({min: 1}).withMessage('el apellido no puede quedar vacío'),
        check('email').isEmail().withMessage('el formato del mail es erroneo'),
        check('password').isLength({min: 6,max: 15}).withMessage('la clave debe ser entre 6 y 15 caracteres'),
        body('password').custom(function (value, { req }) {
        if (req.body.password2 == value) {
            return true
        }
        return false
        }).withMessage('Las contraseñas no coinciden'),

    ], usersController.profileUpdate);

router.put('/users/edit/:id', upload.single('imagen'),
    [
        check('first_name').isLength({ min: 1 }).withMessage('el nombre no puede quedar vacío'),
        check('last_name').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
        check('email').isEmail().withMessage('el formato del mail es erroneo'),
        check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
        body('password').custom(function (value, { req }) {
        if (req.body.password2 == value) {
            return true
        }
        return false
        }).withMessage('Las contraseñas no coinciden'),

    ],usersController.update);
router.post('/users/register', upload.single('imagen'), 
    [
        check('first_name').isLength({min:1}).withMessage('el nombre no puede quedar vacío'),
        check('last_name').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
        check('email').isEmail().withMessage('el formato del mail es erroneo'),
        check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),
        body('password').custom(function (value, { req }) {
            if (req.body.password2 == value) {
                return true
            }
            return false
        }).withMessage('Las contraseñas no coinciden'),

        body('email').custom(function (value) {

        let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
        for (let i = 0; i < usuariosActuales.length; i++) {
            if (usuariosActuales[i].email == value) {
                return false;
            }

        }
        return true;

    }).withMessage('el correo eléctrónico ya se encuentra registrado')
    ] 
    ,usersController.newguest);

router.post('/users/create', upload.single('imagen'),
    [
        check('first_name').isLength({ min: 1 }).withMessage('el nombre no puede quedar vacío'),
        check('last_name').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
        check('email').isEmail().withMessage('el formato del mail es erroneo'),
        check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres'),


        body('password').custom(function (value, {req}) {
            if(req.body.password2 == value) {
                return true
            }
            return false
        }).withMessage('Las contraseñas no coinciden'),

        body('email').custom(function (value) {

            let usuariosActuales = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/usuarios.json')))
            for (let i = 0; i < usuariosActuales.length; i++) {
                if (usuariosActuales[i].email == value) {
                    return false;
                }

            }
            return true;

        }).withMessage('el correo eléctrónico ya se encuentra registrado')
    ], usersController.create);





module.exports = router;
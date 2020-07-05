const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');

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
router.get('/users/profile', usersController.profile);
router.get('/users/register',usersController.register);
router.get('/users/crud', usersController.crud);
router.get('/users/usersCRUD/add', usersController.add);
router.get('/users/detail/:id', usersController.show);
router.get('/users/delete/:id', usersController.delete);
router.get('/users/edit/:id', usersController.edit);
router.put('/users/edit/:id', upload.single('imagen'),usersController.update);
router.post('/users/register', upload.single('imagen'), 
[
    check('first_name').isLength({min:1}).withMessage('el nombre no puede quedar vacío'),
    check('last_name').isLength({ min: 1 }).withMessage('el apellido no puede quedar vacío'),
    check('email').isEmail().withMessage('el formato del mail es erroneo'),
    check('password').isLength({ min: 6, max: 15 }).withMessage('la clave debe ser entre 6 y 15 caracteres')
],usersController.save);



module.exports = router;
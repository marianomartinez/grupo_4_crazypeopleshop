const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');
let fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models/')
const authIsadmin = require('../middlewares/authIsadmin')
const authMiddleware = require('../middlewares/auth')


const User = db.User;

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
router.get('/users/registrados', authMiddleware, authIsadmin, usersController.usuariosregistrados);
router.get('/users/profileShow', authMiddleware, usersController.profileShow);
router.get('/users/profileEdit', authMiddleware,usersController.profileEdit);
router.get('/users/register',usersController.register);
router.get('/users/crud', authMiddleware ,authIsadmin, usersController.crud);
router.get('/users/usersCRUD/add', authMiddleware, authIsadmin, usersController.add);
router.get('/users/detail/:id', authMiddleware, authIsadmin,usersController.show);
router.get('/users/delete/:id', authMiddleware, authIsadmin, usersController.delete);
router.get('/users/edit/:id', authMiddleware, authIsadmin,usersController.edit);


//PUT Y POST
router.get('/users/logout', usersController.logout);

router.post('/users/login',require('../middlewares/userLogin'), usersController.processLogin);

router.put('/users/profileUpdate/:id', upload.single('image'),require('../middlewares/userProfileUpdate'), usersController.profileUpdate);

router.put('/users/edit/:id', upload.single('image'),require('../middlewares/userUpdate'),usersController.update);

router.post('/users/register', upload.single('image'), require('../middlewares/userRegister'),usersController.newguest);

router.post('/users/create', upload.single('image'),require('../middlewares/userCreate'), usersController.create);

module.exports = router;
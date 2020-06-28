const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');

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
router.get('/users/register', usersController.register);
router.get('/users/crud', usersController.crud);
// MM agrega esta ruta
router.get('/users/usersCRUD/add', usersController.add);
// MM agrega hasta acá
router.post('/users/crud', upload.single('imagen'),usersController.save);
router.get('/users/detail/:id', usersController.show);
router.get('/users/delete/:id', usersController.delete);
router.get('/users/edit/:id', usersController.edit);
router.put('/users/edit/:id', upload.single('imagen'),usersController.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const usersController = require(path.resolve(__dirname, '../controllers/usersController'));

// Métodos en nuestros controladores: index - show - edit - delete 

router.get('/users/login', usersController.login);
router.get('/users/profile', usersController.profile);
router.get('/users/register', usersController.register);
router.get('/users/crud', usersController.crud);
router.post('/users/crud', usersController.save);
router.get('/users/detail/:id', usersController.show);
router.get('/users/delete/:id', usersController.delete);
router.put('/users/edit/:id', usersController.edit);

module.exports = router;
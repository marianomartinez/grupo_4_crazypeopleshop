const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

// Métodos en nuestros controladores: index - show - edit - delete 


router.get('/productDetail', productsController.productDetail);
router.get('/products/register', productsController.register);
router.get('/products/crud', productsController.crud);
router.post('/products/crud', productsController.save);
router.get('/products/detail/:id', productsController.show);
router.get('/products/delete/:id', productsController.delete);
router.get('/products/edit/:id', productsController.edit);
router.put('/products/edit/:id', productsController.update);

module.exports = router;
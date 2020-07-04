const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

// Métodos en nuestros controladores: index - show - edit - delete 



router.get('/products/crud', productsController.crud);
router.get('/products/productsCRUD/add', productsController.add);
router.post('/products/crud', productsController.save);
router.get('/products/productsCRUDdetail/:id', productsController.show);
router.get('/products/delete/:id', productsController.delete);
router.get('/products/edit/:id', productsController.edit);
router.put('/products/edit/:id', productsController.update);
router.get('/products/:category/:id', productsController.productShow);

module.exports = router;
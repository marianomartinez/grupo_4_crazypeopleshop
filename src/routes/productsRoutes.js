const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

// Métodos en nuestros controladores: index - show - edit - delete 


router.get('/productDetail', productsController.productDetail);

module.exports = router;
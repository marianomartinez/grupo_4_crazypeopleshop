const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const categoriesController = require(path.resolve(__dirname, '../controllers/categoriesController'));

// Métodos en nuestros controladores: index - show - edit - delete 


router.get('/category/iSkates', categoriesController.showCategoryISkates);
router.get('/category/qSkates', categoriesController.showCategoryQSkates);
router.get('/category/accesories', categoriesController.showCategoryAccesories);
router.get('/categories/crud', categoriesController.crud);

module.exports = router;
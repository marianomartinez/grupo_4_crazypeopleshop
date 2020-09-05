const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');


//Multer Code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/web'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'imagen' + '-' + Date.now() + path.extname(file.originalname));      //UNIQID() --- PHP
    }
})

const upload = multer({ storage })

//Requerir el modulo de los controladores
const categoriesController = require(path.resolve(__dirname, '../controllers/categoriesController'));

// Métodos en nuestros controladores: index - show - edit - delete 

router.get('/category/:id',categoriesController.showCategory);
// Las 3 rutas de abajo fueron reemplazadas por la de arriba
//router.get('/category/iSkates', categoriesController.showCategoryISkates);
//router.get('/category/qSkates', categoriesController.showCategoryQSkates);
//router.get('/category/accesories', categoriesController.showCategoryAccesories);

router.get('/categories/crud', categoriesController.crud);
router.get('/categories/categoriasCRUD/add', categoriesController.add);
router.get('/categories/detail/:id', categoriesController.show);
router.get('/categories/edit/:id', categoriesController.edit);
router.get('/categories/delete/:id', categoriesController.delete);
router.get('/api/categories/:id', categoriesController.allCategories);
// router.get('/subcategories/crud', categoriesController.crudsubcat);
router.put('/categories/edit/:id', upload.single('image'), require('../middlewares/categoryUpdate'), categoriesController.update);
router.post('/categories/crud', upload.single('image'), require('../middlewares/categoryCreate'),categoriesController.save);

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
let multer = require('multer');

//Multer Code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/img/web')); //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'imagen' + '-' + Date.now() + path.extname(file.originalname)); //UNIQID() --- PHP
    }
})

const upload = multer({
    storage
})

//Requerir el modulo de los controladores
const subcategoriesController = require(path.resolve(__dirname, '../controllers/subcategoriesController'));

// Métodos en nuestros controladores: index - show - edit - delete 

// router.get('/subcategory/:id', subcategoriesController.showSubcategory);
// Las 3 rutas de abajo fueron reemplazadas por la de arriba
//router.get('/category/iSkates', categoriesController.showCategoryISkates);
//router.get('/category/qSkates', categoriesController.showCategoryQSkates);
//router.get('/category/accesories', categoriesController.showCategoryAccesories);

router.get('/subcategories/crud', subcategoriesController.crud);
router.post('/subcategories/crud', upload.single('imagen'), subcategoriesController.save);
router.get('/subcategories/subcategoriesCRUD/add', subcategoriesController.add);
router.get('/subcategories/detail/:id', subcategoriesController.show);
router.put('/subcategories/edit/:id', upload.single('imagen'), subcategoriesController.update);
router.get('/subcategories/edit/:id', subcategoriesController.edit);
router.get('/subcategories/delete/:id', subcategoriesController.delete);



module.exports = router;
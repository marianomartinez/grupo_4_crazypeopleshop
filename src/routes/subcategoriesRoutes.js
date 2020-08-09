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



router.get('/subcategories/crud', subcategoriesController.crud);
router.get('/subcategories/subcategoriesCRUD/add', subcategoriesController.add);
router.get('/subcategories/detail/:id', subcategoriesController.show);
router.get('/subcategories/edit/:id', subcategoriesController.edit);
router.get('/subcategories/delete/:id', subcategoriesController.delete);

router.put('/subcategories/edit/:id', upload.single('image'), require('../middlewares/subcategoryUpdate'), subcategoriesController.update);
router.post('/subcategories/crud', upload.single('image'), require('../middlewares/subcategoryCreate'),subcategoriesController.save);

module.exports = router;
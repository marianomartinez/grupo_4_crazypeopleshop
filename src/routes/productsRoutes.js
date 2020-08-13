const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');


//Multer Code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..','..','public','img','prod_img','newProducts'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'imagen' + '-' + Date.now() + path.extname(file.originalname));      //UNIQID() --- PHP
    }
})

const upload = multer({ storage })

//Requerir el modulo de los controladores
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

// Métodos en nuestros controladores: index - show - edit - delete 



router.get('/products/crud', productsController.crud);
router.get('/products/productsCRUD/add', productsController.add);
router.post('/products/crud', productsController.save);
router.get('/products/productsCRUDdetail/:id', productsController.show);
router.get('/products/delete/:id', productsController.delete);
router.get('/products/productsCRUDedit/:id', productsController.edit);
router.put('/products/productsCRUDedit/:id', productsController.update);
router.get('/products/:category/:id', productsController.productShow);

module.exports = router;
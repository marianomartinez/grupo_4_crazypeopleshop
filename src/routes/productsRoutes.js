const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const authIsadmin = require('../middlewares/authIsadmin')
const authMiddleware = require('../middlewares/auth')


//Multer Code

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..','..','public','img','prod_img'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
        cb(null, 'newProducts/' + 'imagen' + '-' + Date.now() + path.extname(file.originalname)); //UNIQID() --- PHP
    }
})

// const allowedImage = function (req,file,cb) {
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Sólo archivos de imagen están permitidos!';
//         return cb(new Error('Sólo archivos de imagen están permitidos!'), false);
//     }
//     cb(null, true);
// }

const upload = multer({ storage /*,allowedImage*/ })

//Requerir el modulo de los controladores
const productsController = require(path.resolve(__dirname, '../controllers/productsController'));

// Métodos en nuestros controladores: index - show - edit - delete 



router.get('/products/crud', authMiddleware, authIsadmin, productsController.crud);
router.get('/products/productsCRUD/add', authMiddleware, authIsadmin,productsController.add);
router.get('/products/productsCRUDdetail/:id', authMiddleware, authIsadmin, productsController.show);
router.get('/products/delete/:id', authMiddleware, authIsadmin, productsController.delete);
router.get('/products/productsCRUDedit/:id', authMiddleware, authIsadmin, productsController.edit);
router.get('/products/productsCRUDeditImages/:id', authMiddleware, authIsadmin, productsController.editImages);
router.get('/products/deleteProdImage/:id/:imgId', authMiddleware, authIsadmin,productsController.deleteProdImage);
router.get('/products/:category/:id',productsController.productShow);
router.get('/products/search',productsController.productSearch);
router.get('/api/productEdit/:id' ,productsController.productEdit);
router.get('/api/productSizes/:id' ,productsController.productSizes);
router.get('/api/sizeList',  productsController.sizeList);
router.put('/products/productsCRUDedit/:id', authMiddleware, authIsadmin, require('../middlewares/productUpdate'), productsController.update);
router.put('/products/productsCRUDeditImages/:id',/* require('../middlewares/productUpdate'),*/ upload.any(), authMiddleware, authIsadmin,productsController.updateImages);
router.post('/products/crud', upload.any(), require('../middlewares/productCreate'), authMiddleware, authIsadmin, productsController.save);

module.exports = router;
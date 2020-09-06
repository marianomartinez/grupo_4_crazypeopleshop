const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../middlewares/auth')
const checkoutController = require(path.resolve(__dirname, '../controllers/checkoutController'));
router.get("/cart", authMiddleware, checkoutController.cart);
router.post("/cart/additemCart/", authMiddleware, require('../middlewares/cartAddItem'), checkoutController.additemCart);
router.post('/cart/deleteitemCart/', authMiddleware, checkoutController.deleteitemCart);
router.post('/cart/shop', authMiddleware, checkoutController.shop);
router.get('/cart/cartHistory', authMiddleware, checkoutController.cartHistory);
router.get('/cart/detail/:id', authMiddleware, checkoutController.cartDetail);


module.exports= router;
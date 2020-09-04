const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../middlewares/auth')
const checkoutController = require(path.resolve(__dirname, '../controllers/checkoutController'));
router.get("/cart", authMiddleware, checkoutController.index);
router.post("/cart/additemCart/", authMiddleware, require('../middlewares/cartAddItem'), checkoutController.additemCart);



module.exports= router;
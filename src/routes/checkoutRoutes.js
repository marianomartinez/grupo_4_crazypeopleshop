const express = require('express');
const router = express.Router();
const path = require('path');
const checkoutController = require(path.resolve(__dirname, '../controllers/checkoutController'));
router.get("/cart", checkoutController.index);




module.exports= router;
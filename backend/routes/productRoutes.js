const express = require('express');
const router = express.Router();

const { getAPIProducts, getProductById } = require('../controller/productControllers');

// @dexc    GET all products from db
// @route   GET /api/products
// @access  Public
router.get('/', getAPIProducts);

// @dexc    GET all products from db
// @route   GET /api/products/:id
// @access  Public
router.get('/:id',getProductById);


module.exports = router;
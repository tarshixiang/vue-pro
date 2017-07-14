const express = require('express');
const ShopcarController = require('../controller/shopcar.js');
const router = express.Router();
ShopcarController(router);
module.exports = router;

const express = require('express')
const UserController = require('../controller/user.js')
const CherryController = require('../controller/cherry.js')
const ShopcarController = require('../controller/shopcar.js')
const router = express.Router()

UserController(router) 
CherryController(router) 
ShopcarController(router)
module.exports = router

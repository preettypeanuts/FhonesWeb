const express = require('express')
const { route } = require('../app')
const HomeController = require('../controllers/HomeController')
const DataController = require('../controllers/DataController')
const router = express.Router()

// Test
router.get('/', HomeController.getHome)

// Get Data
router.get('/brands', DataController.brandData)
router.get('/brand-list', DataController.brandList)
router.get('/device-detail', DataController.deviceDetail)

module.exports = router

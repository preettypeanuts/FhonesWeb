const express = require('express')
const router = express.Router()
const errorHandler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/authentication')
//Controller
const HomeController = require('../controllers/HomeController')
const DataController = require('../controllers/DataController')
const UserController = require('../controllers/UserController')
const LikeController = require('../controllers/LikeController')

const middleware = (req, res, next) => { next() }
router.use(middleware)

// Test
router.get('/', HomeController.getHome)

// Get Data
router.get('/brands', DataController.allBrands)
router.get('/brands/:id/devices', DataController.brandProductList)
router.get('/brands/:id/detail', DataController.deviceDetail)
router.get('/brands/:id/search', DataController.searchDevice)

// Likes
router.patch('/likes', LikeController.increaseLike)

//Comments
router.post('/comment/:id/device/:id')

//User endpoint
router.post('/login', UserController.login)
router.use(authentication)
router.post('/register', UserController.register)


// router.use(authentication)


router.use(errorHandler)
module.exports = router

const express = require('express')
const router = express.Router()
const errorHandler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/authentication')
//Controller
const HomeController = require('../controllers/HomeController')
const DataController = require('../controllers/DataController')
const UserController = require('../controllers/UserController')
const LikeController = require('../controllers/LikeController')
const CommentController = require('../controllers/CommentController')

const middleware = (req, res, next) => { next() }
router.use(middleware)

// Test
router.get('/', HomeController.getHome)

// Get Data
router.get('/brands', DataController.allBrands)
router.get('/brands/:id/devices', DataController.brandProductList)
router.get('/brands/:id/detail', DataController.deviceDetail)
router.get('/brands/:id/search', DataController.searchDevice)

//User endpoint
router.post('/login', UserController.login)

router.use(authentication)
router.post('/register', UserController.register)

// Likes
router.post('/devices/:id/likes', LikeController.increaseLike)
router.delete('/devices/:id/likes', LikeController.decreaseLike)

//Comments
router.post('/devices/:id/comments', CommentController.addComment)
router.delete('/devices/:id/comments', CommentController.deleteComment)



// router.use(authentication)


router.use(errorHandler)
module.exports = router

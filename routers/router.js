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
const GoogleController = require('../controllers/GoogleController')

const middleware = (req, res, next) => { next() }
router.use(middleware)

// Test
router.get('/', HomeController.getHome)

// Get Data
router.get('/brands', DataController.allBrands)
router.get('/brands/:id/devices', DataController.brandProductList)
router.get('/brands/:id/detail', DataController.deviceDetail)
router.get('/brands/:id/search', DataController.searchDevice)

// Google Login
router.post('/auth/google/callback', GoogleController.login)

//User endpoint
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.use(authentication)

// Likes
router.patch('/devices/:id/likes', LikeController.increaseLike)

//Comments
router.get('/devices/:id/comments', CommentController.readComment)
router.post('/devices/:id/comments', CommentController.addComment)
router.delete('/devices/:id/comments/:commentId', CommentController.deleteComment)


// router.use(authentication)


router.use(errorHandler)
module.exports = router

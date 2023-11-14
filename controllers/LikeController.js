const { Like } = require('../models')
class LikeController {
    static async increaseLike(req, res, next) {
        try {
            const post = await post.findByPk(id)
            if (!post) throw { message: 'PostNotFound' }
            const upLike = await post.update({likeCount: post.likeCount +1})
            res.status(200).json(upLike)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = LikeController
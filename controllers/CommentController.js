const gsmarena = require('gsmarena-api');
const { User, Comment } = require('../models')

class CommentController {
    static async addComment(req, res, next) {
        try {
            const { comment } = req.body
            const { id } = req.params
            
            const user = await User.findByPk(id)
            const devices = await gsmarena.catalog.getBrand(id);

            const addComment = await Comment.create({
                comment: comment,
                deviceId: devices,
                userId: user
            })
            res.status(200).json(addComment)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CommentController
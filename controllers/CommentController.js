const { Comment } = require('../models')

class CommentController {
    static async addComment(req, res, next) {
        try {
            const { comment } = req.body
            const { id } = req.params

            const userId = req.user.id
      
            const addComment = await Comment.create({
                comment: comment,
                deviceId: id,
                userId: userId
            })
            res.status(200).json(addComment)
        } catch (error) {
            next(error)
        }
    }

    static
}
module.exports = CommentController
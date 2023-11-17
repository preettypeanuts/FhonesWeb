const { Comment, User } = require('../models')

class CommentController {
    static async readComment(req, res, next) {
        try {
            const { id } = req.params

            const readComment = await Comment.findAll({
                where: {
                    deviceId: id,
                }, include: {
                    model: User
                }
            })
            res.status(200).json(readComment)
        } catch (error) {
            next(error)
        }
    }
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
    static async deleteComment(req, res, next) {
        try {
            const { id } = req.params
            const userId = req.user.id

            const deleteComment = await Comment.destroy({
                where: {
                    deviceId: id,
                    userId: userId
                }
            })
            res.status(200).json(deleteComment)
        } catch (error) {
            next(error)
        }
    }
}
module.exports = CommentController
const { Like } = require('../models')
class LikeController {
    static async increaseLike(req, res, next) {
        try {
            const { id } = req.params
            const userId = req.user.id

            const like = await Like.findOne({
                where: {
                    deviceId: id,
                    userId: userId
                }
            })

            if (!like) {
                await Like.create({
                    likeCount: 1,
                    deviceId: id,
                    userId: userId
                })
            } else {
                await like.increment('likeCount', { by: 1 });
            }

            res.status(200).json(like)
        } catch (error) {
            next(error)
        }
    }
    static async decreaseLike(req, res, next) {
        try {
            const { id } = req.params
            const userId = req.user.id

            const like = await Like.findOne({
                where: {
                    deviceId: id,
                    userId: userId
                }
            })

            if (like > 1) {
                await like.increment('likeCount', { by: -1 });
            } else {
                await Like.destroy({
                    where: {
                        deviceId: id
                    }
                })
            }
            res.status(200).json(like)

        } catch (error) {
            next(error)
        }
    }
}

module.exports = LikeController
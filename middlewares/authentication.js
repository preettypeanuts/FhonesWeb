const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) throw { name: 'InvalidToken', message: "Token malformed" }

        const rawToken = authorization.split(' ')
        if (rawToken[0] !== 'Bearer') throw { name: 'InvalidToken', message: "Wrong auth scemes" }

        const token = rawToken[1]
        const payLoad = verifyToken(token)
        const user = await User.findByPk(payLoad.id)

        if (!user) throw { name: 'InvalidToken', message: "User Not Found" }

        req.user = user

        next()
    } catch (error) {
        next(error)
    }
}
module.exports = authentication

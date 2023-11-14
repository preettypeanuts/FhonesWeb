const { comparePass } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models')


class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) throw { name: "InvalidInput", field: "email" }

            if (!password) throw { name: "InvalidInput", field: "password" }

            const user = await User.findOne({ where: { email } })

            if (!user) throw { name: "Unauntenticated" }

            const compared = comparePass(password, user.password)

            if (!compared) throw { name: "Unauntenticated" }

            const token = createToken({ id: user.id })
            res.status(200).json({ message: `Succes login!`, token: `${token}` })
        } catch (error) {
            next(error)
        }
    }
    static async register(req, res, next) {
        try {
            const { username, email, password } = req.body

            if (!username) throw { name: "InvalidInput", field: "username" }
            if (!email) throw { name: "InvalidInput", field: "email" }
            if (!password) throw { name: "InvalidInput", field: "password" }

            const user = await User.create({ username, email, role: "Client", password })
            res.status(201).json({ message: `Created new user ${user.email}` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
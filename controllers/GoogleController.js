const { createToken } = require("../helpers/jwt");
const { User } = require("../models")
const {OAuth2Client} = require('google-auth-library');

class GoogleController {
    static async login(req, res, next) {
        try {
            console.log('aaaa');
            const { code } = req.body
            const client = new OAuth2Client();
            const ticket = await client.verifyIdToken({
                idToken: code,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const { email, sub, name, password, providerId } = ticket.getPayload();
            const isi = ticket.getPayload()
            console.log(isi);
            const user = await User.findOrCreate({ where: { email, username: name, password: sub } });
            console.log(user);
            const cretedToken = createToken({ id: user[0].id })
            console.log(cretedToken);

            res.status(200).json(cretedToken);
        } catch (error) {
            console.log(error, "errorrnya");
            next(error)
        }
    };
}
module.exports = GoogleController
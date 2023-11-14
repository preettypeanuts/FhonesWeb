class UserController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await user.findOne({
                where: { email }
            })
        } catch (error) {
            res.status(500), json({ message: "Internal Server Error" })
            console.log(error);
        }
    }
}
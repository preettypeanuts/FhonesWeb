class HomeController {
    static getHome(req, res) {
        res.status(201).json({ message: "Testing 1" })
    }
}
module.exports = HomeController
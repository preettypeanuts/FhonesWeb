const axios = require('axios');
class YouTubeController{
    static async getVideo (req, res, next) {
        try {
            const { id } = req.params

            const response = await axios.request(id);
            res.status(200).json(response)
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = YouTubeController
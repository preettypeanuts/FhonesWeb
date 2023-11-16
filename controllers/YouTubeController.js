const axios = require('axios');
class YouTubeController{
    static async getVideo (req, res, next) {
        try {
            const response = await axios.request(options);
            res.status(200).json(response)
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = YouTubeController
const gsmarena = require('gsmarena-api');

class DataController {
    static async allBrands(req, res, next) {
        try {
            const brands = await gsmarena.catalog.getBrands();
            res.status(200).json(brands)
        } catch (error) {
            next(error)
        }
    }
    static async brandProductList(req, res, next) {
        try {
            const { id } = req.params
            console.log(id);
            const devices = await gsmarena.catalog.getBrand(id);
            res.status(200).json(devices)
        } catch (error) {
            next(error)
        }
    }
    static async deviceDetail(req, res, next) {
        try {
            const { id } = req.params
            console.log(id);
            const deviceDetail = await gsmarena.catalog.getDevice(id);
            res.status(200).json(deviceDetail)
        } catch (error) {
            next(error)
        }
    }
    static async searchDevice(req, res, next) {
        try {
            const { id } = req.params
            console.log(id);
            const devices = await gsmarena.search.search(id);
            res.status(200).json(devices)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = DataController
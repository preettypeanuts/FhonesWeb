const gsmarena = require('gsmarena-api');
const { Op } = require("sequelize");
const { search } = require('../app');

class DataController {
    static async brandData(req, res, next) {
        try {
            const brands = await gsmarena.catalog.getBrands();
            res.status(200).json(brands)
        } catch (error) {
            res.status(500),json({message: "Internal Server Error"})
            console.log(error);
        }
    }
    static async brandList(req, res, next) {
        try {
            const brandList = await gsmarena.catalog.getBrand('apple-phones-48');
            res.status(200).json(brandList)
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"})
            console.log(error);
        }
    }
    static async deviceDetail(req, res, next) {
        try {
            const deviceDetail = await gsmarena.catalog.getDevice('apple_iphone_13_pro_max-11089');
            res.status(200).json(deviceDetail)
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"})
            console.log(error);
        }
    }
}

module.exports = DataController
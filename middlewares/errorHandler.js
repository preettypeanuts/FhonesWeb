const errorHandler = (error, req, res, next) => {
    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            res.status(400).json({ message: error.errors[0].message })
            break;
        case "InvalidToken":
        case "JsonWebTokenError":
            res.status(401).json({ message: 'Invalid Token' })
            break;
        case "Forbidden":
            res.status(403).json({ message: 'Forbidden Access' })
            break;
        default:
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })
            break;

    }
}

module.exports = errorHandler

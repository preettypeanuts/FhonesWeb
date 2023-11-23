const errorHandler = (error, req, res, next) => {
    console.log(error);
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
        case "InvalidInput":
            res.status(400).json({ message: `please fill email and password` })
            break;
        case "EmptyInput":
            res.status(400).json({ message: `Please write comment!` })
            break;
        case "CommentNotFound":
            res.status(404).json({ message: `No available comment!` })
            break;
        case "PostNotFound":
            res.status(404).json({ message: `No matches post!` })
            break;
        case "Unauntenticated":
            res.status(401).json({ message: `email or password unregistered` })
            break;
        default:
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })
            break;

    }
}

module.exports = errorHandler

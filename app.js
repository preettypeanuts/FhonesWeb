if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors');
const app = express();
const router = require('./routers/router')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)


module.exports = app
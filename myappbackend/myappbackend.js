const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes')
const cors = require('cors')
var bodyParser = require('body-parser')


dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DATABASECONNECTED"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/todolist', routesUrls)
app.listen(4000, () => console.log("Making something"))
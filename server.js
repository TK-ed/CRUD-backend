//requiring the libraries
require('dotenv').config()
const express = require('express')
const app = express()
const routerroute = require('../backend/routes/workouts')
const mongoose = require('mongoose')

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, res.method)
    next()
})

// routes
app.use('/api',routerroute) 

app.get('/', (req, res) => {
    res.json({
        mssg: 'Welcome to the app'
    })
})

// connecting to the db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`listenin' on port`, process.env.PORT, 'and connected to db')
        })
    })
    .catch((error) => {
        console.log(error)
    })

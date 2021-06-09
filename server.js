const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require(express-session)
const MongoStore = require(connect-mongo)(session)
const connectDB = require(',/config/database')
const mainRoutes = require('./routes/main')
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
// what does this line do?
app.use(epress.urlencoded({ extended: true}))
app.use(express.json())

// sessions
app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

app.use('/', mainRoutes)
app.use('/journal', journalRoutes)
app.use('/feed', feedRoutes)

app.listen(process.env.PORT, () => {
    console.log('Serving running, but is it fast?')
})
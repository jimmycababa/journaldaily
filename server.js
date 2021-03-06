const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const journalRoutes = require('./routes/journal')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
// what does this line do?
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(logger('dev'))

// sessions
app.use(
    session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// index page. need this as a default for the browser to kick back to as default
app.use('/', mainRoutes)
app.use('/journal', journalRoutes)
// app.use('/feed', feedRoutes)

app.listen(process.env.PORT, () => {
    console.log('Serving running, but is it fast?')
})
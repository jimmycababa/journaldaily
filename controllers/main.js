const Main = require('../models/Main')

module.exports = {
    getIndex: (req,res) => {
        res.render('main.ejs')
    }
}
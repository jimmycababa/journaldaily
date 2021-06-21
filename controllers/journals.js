const Journal = require('../models/Journal')

module.exports = {
    getEntry: async (req,res) => {
        try {
            const journalItems = await Journal.countDocuments({completed: false})
            res.render('jounal.ejs', {entry: journalItems})
        }catch(err){
            console.log(err)
        }
    },
    
    createEntry: async (res, req) => {
        try {
            // journalEntry is the li class from ejs
            await Main.create({entry: req.body.journalEntry, completed: false})
            console.log('Entry has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}

const mongoose = require('mongoose')

const EntrySchema = new mongoose.Schema({
    entry: { 
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Journal', EntrySchema)
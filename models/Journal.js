const mongoose = require('mongoose')

const JournalSchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    },

    useId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Journal', JournalSchema)
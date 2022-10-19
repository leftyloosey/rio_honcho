const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    length: {
        type: String,
        enum: ['short', 'long']
    },
    status: {
        type: String,
        enum: ['closer', 'opener', 'other']
    },
    setId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Set',
    }
})

module.exports = mongoose.model('Song', SongSchema)
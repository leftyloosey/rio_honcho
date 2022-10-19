const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // }
})

module.exports = mongoose.model('Set', SetSchema)
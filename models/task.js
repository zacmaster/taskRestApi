const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String
})




module.exports = mongoose.model('Task',TaskSchema)
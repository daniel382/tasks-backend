const restful = require('node-restful')
const mongoose = restful.mongoose

const tasksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    complete: { type: Boolean, require: true },
    due: { type: Date, required: false }
})

module.exports = restful.model('tasks', tasksSchema)
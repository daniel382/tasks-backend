const tasks = require('./model')

tasks.methods(['get', 'post', 'put', 'delete'])
tasks.updateOptions({ new: true, runValidators: true })

module.exports = tasks
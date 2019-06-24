const express = require('express')

module.exports = function(app) {
    const router = express.Router()
    app.use('/api', router)

    const tasks = require('../api/tasksServices')
    tasks.register(router, '/tasks')
}
const express = require('express')

module.exports = function(app) {
    const router = express.Router()
    app.use('/api', router)

    const tasks = require('../api/tasks/services')
    tasks.register(router, '/tasks')
}
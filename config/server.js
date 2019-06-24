const express = require('express')
const bodyParser = require('body-parser')

const host = '127.0.0.1'
const port = 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Application is running on http://${host}:${port}`))

module.exports = app
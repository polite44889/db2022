const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API Rest API' })
})

app.get('/fruits', db.getFruits)
app.get('/fruits/:id', db.getFruitById)
app.post('/fruits', db.createFruitEntry)
app.put('/fruits/:id', db.updateFruitEntry)
app.delete('/fruits/:id', db.deleteFruitEntry)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
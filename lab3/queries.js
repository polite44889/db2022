const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})
const getFruits = (request, response) => {
    pool.query('SELECT * FROM fruits ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getFruitById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM fruits WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createFruitEntry = (request, response) => {
    const { fruitNaming, weight, country, category, price } = request.body

    pool.query('INSERT INTO fruits (fruitNaming, weight, country, category, price) VALUES ($1, $2, $3, $4, $5)', [fruitNaming, weight, country, category, price], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`FruitEntry added with ID: ${results.insertId}`)
    })
}

const updateFruitEntry = (request, response) => {
    const id = parseInt(request.params.id)
    const { fruitNaming, weight, country, category, price } = request.body

    pool.query(
        'UPDATE fruits SET fruitNaming = $1, weight = $2, country = $3, category = $4, price = $5 WHERE id = $6', [fruitNaming, weight, country, category, price, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`FruitEntry modified with ID: ${id}`)
        }
    )
}

const deleteFruitEntry = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM fruits WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Fruit deleted with ID: ${id}`)
    })
}

module.exports = {
    getFruits,
    getFruitById,
    createFruitEntry,
    updateFruitEntry,
    deleteFruitEntry,
}
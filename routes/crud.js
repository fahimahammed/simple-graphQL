const express = require('express')
const router = express.Router()
const { collection } = require('../dbConfig/index')

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', async (req, res) => {
    const findData = await collection.find({}).toArray();
    res.send(findData)
})

// define the about route
router.get('/save', async (req, res) => {
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
    res.send(insertResult)
})

module.exports = router
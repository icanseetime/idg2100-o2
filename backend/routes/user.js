//api/users
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET
// Find users
router.get('/', (req, res) => {
    res.send('USERS :)')
})

router.post('/new', routes.createUser)

module.exports = router
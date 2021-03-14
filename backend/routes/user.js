//api/users
const express = require('express')
const router = express.Router()
const routes = require('./routes')

// GET
// Find users
router.get('/', (req, res) => {
    res.send('USERS :)') // TODO: remove test
})

// Get list of all teachers
router.get('/teachers', routes.getTeachers)

// "Get new password"
router.get('/reset-password', routes.findUser)

// POST
// Create new user
router.post('/new', routes.createUser)

// Log in user
router.post('/login', routes.validateUser)



module.exports = router
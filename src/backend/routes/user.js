//api/user
const express = require('express')
const router = express.Router()

// DB schema
const User = require('../models/User')

// GET
// Find customer view
router.get('/', (req, res) => {
    res.status(200).render('customers/index', {
        searchOptions: '',
        customers: []
    })
})
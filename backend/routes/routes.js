// const bcrypt = require('bcrypt')

// DB Schemas
const User = require('../models/User')

// POST: Create new user
const createUser = async (req, res) => {
    // const salt = await bcrypt.genSalt()
    // const securePass = await bcrypt.hash(req.body.password, salt)

    // const securePass = await bcrypt.hash(req.body.password, 10, () => {
    //     // Save hash in password database? 
    // })

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })
    try {
        await newUser.save()
        res.status(200).redirect('/login')
        // res.status(200).json(`User with e-mail ${req.body.email} saved to the database.`)
    } catch (err) {
        res.status(500).json(`There was an error adding ${req.body.email} to the database. \n ${err} \n ${req}`)
    }
}

// GET: Check if user exists
const findUser = async (req, res) => {
    try {
        let user = await User.find({ email: req.body.email })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

// GET: Log in user
const validateUser = async (req, res) => {
    try {
        let user = await User.find({ email: req.body.email })
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createUser,
    findUser,
    validateUser
}
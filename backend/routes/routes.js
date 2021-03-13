// const bcrypt = require('bcrypt')

// DB Schemas
const User = require('../models/User')

// POST: Create new user
const createUser = async (req, res) => {
    console.log(req.body)
    // const salt = await bcrypt.genSalt()
    // const securePass = await bcrypt.hash(req.body.mathingPasswords, salt)

    // const securePass = await bcrypt.hash(req.body.mathingPasswords, 10, () => {
    //     // Save hash in password database? 
    // })

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.matchingPasswords,
        role: req.body.role
    })

    try {
        await newUser.save()
        let answer = { redirect: '/login' }
        res.status(200).json(answer)
    } catch (err) {
        res.status(500).json(`There was an error adding ${req.body.email} to the database. \n ${err} \n ${req}`)
    }
}

// GET: Check if user exists
const findUser = async (req, res) => {
    console.log(req.query.formValues)
    try {
        let user = await User.find({ email: req.query.formValues.email })
        if (user.length) {
            res.status(200).json({ successMessage: `An e-mail has been sent to ${req.query.formValues.email}. Please check your e-mail to reset your password.` })
        } else {
            res.status(400).json({ errorMessage: `We couldn't fint a user with the e-mail address ${req.query.formValues.email}. Please try again.` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

// GET: Log in user
const validateUser = async (req, res) => {
    console.log(req.body)
    try {
        let user = await User.find({ email: req.body.email })
        if (user.length) {
            let answer = { redirect: '/user' }
            res.status(200).json(answer)
        } else {
            let answer = { errorMessage: 'Something went wrong. Please try again.' }
            res.status(400).json(answer)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createUser,
    findUser,
    validateUser
}
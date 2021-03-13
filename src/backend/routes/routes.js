// DB Schemas
const User = require('../models/User')

// POST: Create new user
const createUser = async (req, res) => {
    // const salt = await bcrypt.genSalt()
    // const securePass = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })
    try {
        await newUser.save()
        res.status(200).json(`User with e-mail ${req.body.email} saved to the database.`)
    } catch (err) {
        res.status(500).json(`There was an error adding ${req.body.email} to the database. \n ${err} \n ${req}`)
    }
}

module.exports = {
    createUser
}
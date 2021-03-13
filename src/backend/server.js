if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Routers
const apiRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.on('open', () => console.log('Connected to database'))

// Routes
app.use('/api', apiRouter)
app.use('/api/user', userRouter)

// Server
app.listen(process.env.PORT || 5000)
const express = require('express')
const app = express()
const morgan = require('morgan')


//Settings
app.set('port',process.env.PORT || 3000)
app.set('json spaces', 2)

//Middleware
app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users',require('./routes/users'))

//Starting server
app.listen(3000, () => {
    console.log('server on port ', app.get('port'))
})


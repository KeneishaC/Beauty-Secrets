const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const port = 3000

//require the db config module
require('./config/database')


//router modules
const homeRouter = require('./routes/home') 
const beautiesRouter = require('./routes/beauties')
const notesRouter = require('./routes/notes')

//create the express app
const app = express()

//configure server setting
app.set('view engine', 'ejs')


//mount middle ware
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))

//mount routes
app.use('/', homeRouter)
app.use('/beauties', beautiesRouter)
app.use('/', notesRouter)


//tell the app to listen
app.listen(port, function(){
    console.log(`Hey beautiful, express is listening on port: ${port}`)
})
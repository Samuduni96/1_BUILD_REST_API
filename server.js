require('dotenv').config()                  // this is gonna load all the environmental variables from .env 

const express = require('express')          // to pull in the express library
const app = express()                       // create app variable, which use to configure the server 
const mongoose = require('mongoose')        // to require the mongoose library 

mongoose.connect(process.env.DATABASE_URL)                      // subscribers is the database name 
const db = mongoose.connection
db.on('error', (error) => console.error(error))                 // this allow us to see if there is a problem connecting to our database 
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())                                         // this lets the server accept JSON as a body 

const subscribersRouter = require('./routes/subscribers')       // to route all of our subscriber information 
app.use('subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))           

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const v1UsersRoutes = require('./routes/v1/users')


const app = express();
dotenv.config();


// use environment variables
const uri = process.env.uri
const port = process.env.port
const test =  "string"

// middleware
app.use(express.json())


// define routes
app.use('/v1/', v1UsersRoutes)


// connect to mongoDB & start server
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(port, () => {
      console.log(`Running on port ${port}!`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
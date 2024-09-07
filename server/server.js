const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const v1UsersRoutes = require('./routes/v1/users')
const v1PostsRoutes = require('./routes/v1/posts')
const cors = require('cors')

const app = express();
dotenv.config();


// use environment variables
const uri = process.env.uri
const port = process.env.port

// middleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // Important for `withCredentials: true`
}))


// define routes
app.use('/v1/', v1UsersRoutes, v1PostsRoutes)


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
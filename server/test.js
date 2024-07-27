const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// ur url in .env file
const uri = process.env.uri
const port = process.env.port

const app = express();
const Test = require("./models/testModel");

app.use(express.json());
app.use(cors());

// connect to mongoDB & start server
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => {
    console.log(err)
  });

// Default route to test connection to the server
app.get("/", async (req, res) => {
  res.send("Welcome");
});


// GET all users from mongoDB
app.get("/user", async (req, res) => {
  try {
    const docs = await Test.find();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({error: "Error getting user documents"})
  }
});

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const doc = new Test({ name, email, password});
    const saveDoc = await doc.save();
    res.status(201).json({_id: saveDoc._id });
  } catch (error) {
    res.status(500).json({error: "error adding user"});
  }
})

app.listen(port, () => {
  console.log(`Running on port ${port}!`)
})

//const client = new MongoClient(uri);
//const { MongoClient } = require("mongodb");
//run this to check if your creditionals are right
/*
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


*/

 //test to see if express works
 /*
  app.get('/', function (req, res) {
    res.send('Hello World')
  })
*/


// INSERT TEST
/*
const db = process.env.db;
const database = client.db(db);

const c = process.env.collection;
const coll = database.collection(c)
 
const doc = { "name": "luis peach", "email": "luispeach@gmail.com", "password":"luispeach"};

var result = coll.insertOne(doc);

console.log(`A document was inserted with the _id: ${result.insertedId}`);
*/
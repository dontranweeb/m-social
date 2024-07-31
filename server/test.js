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
const { hashPassword } = require('./middleware/auth');

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


// GETs all users from test/tests collection
app.get("/users", async (req, res) => {
  try {
    const users = await Test.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error getting users" })
  }
});

// GETs a single user from test/tests collection

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await Test.findById(id);
    if(!user) {
      return res.status(404).json({ error: "User was not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  POSTs user to test/tests collection
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new Test({ name, email, password });
    const saveUser = await user.save();
    res.status(201).json({ _id: saveUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE user from test/tests collection
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await Test.findByIdAndDelete(id);
    if(!user) {
      return res.status(404).json({ error: "User was not found" });
    }
    res.status(200).json({ msg: "User has been deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

// UPDATE user from test/tests collection
app.put("/users/:id", hashPassword, async (req, res) => {
  const { id } = req.params;
  const { name, email, password} = req.body;

  try {
    const user = await Test.findByIdAndUpdate(id);
    if (!user) {
      return res.status(200).json({ error: "User was not found" });
    }
    user.name = name || user.name;
    user.email = email || user.email;

    if(password) {
      user.password = password;
    }
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

app.listen(port, () => {
  console.log(`Running on port ${port}!`)
});

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
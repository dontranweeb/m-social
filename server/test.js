const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const { MongoClient } = require("mongodb");


// ur url in .env file
const uri = process.env.uri
const port = process.env.port

const client = new MongoClient(uri);


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
 
const doc = { "name": "Dan Daniel Dan", "email": "dandandan@dan.com", "password":"notdan"};

var result = coll.insertOne(doc);

console.log('A document was isnerted with the _id: ${result.insertedId}');
*/
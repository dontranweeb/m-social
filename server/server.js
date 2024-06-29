const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const { MongoClient } = require("mongodb");


// ur url in .env file
const uri = process.env.uri
const port = process.env.port


const client = new MongoClient(uri);



const db = process.env.db;
const database = client.db(db);

const c = process.env.collection;
const coll = database.collection(c)
 
const doc = { "name": "Dan Daniel Dan", "email": "dandandan@dan.com", "password":"notdan"};

var result = coll.insertOne(doc);

console.log('A document was isnerted with the _id: ${result.insertedId}');



  app.listen(port, () => {
    console.log('Running on port 3001!')
  })
  
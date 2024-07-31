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
app.post("/users", hashPassword, async (req, res) => {
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



 // INSERT POST TEST

/* async function run() {
 // try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("postsDB");
    const createPost = database.collection("newPosts");
    
    // Create a document to insert
    const doc = 
    {
      title: "First post",
      content: "This is my dummy post!",
      _id : 1,
      likes: 0,

    }
    // Insert the defined document into the "haiku" collection
    const result = createPost.insertOne(doc);
    // Print the ID of the inserted document
    console.log(`A new post was inserted with the _id: ${result.insertedId}`);
  //} finally {
     // Close the MongoDB client connection
    // await client.close();
  //}
  */

// Run the function and handle any errors




// UPDATE POST TEST
/*
  async function run() {
  try {
    const database = client.db("postsDB");
    const createPost = database.collection("newPosts");
    // Create a filter for the post ID"
    const filter = { _id: "1" };
    // Set the upsert option to insert a document if no documents match
    // the filter * <--------------- Fix comment while testing
    const options = { upsert: true };
    // Specify the update to set a value for the plot field
    const updatePost = {
      $set: {
        content: `My new post is now updated`
      },
    };
    // Update the first document that matches the filter
    const result = await createPost.updateOne(filter, updatePost, options);
    
    // Print the number of matching and modified documents
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown errors
run().catch(console.dir);
*/




// DELETE POST TEST
/*
async function run() {
  try {
    const database = client.db("postsDB");
    const createPost = database.collection("newPosts");
      //Delete the first document in the "movies" collection that matches
    // the specified query document <------------
    const query = { _id: 1};
    const result = await createPost.deleteOne(query);
      //Print a message that indicates whether the operation deleted a
    //document <------------
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one post.");
    } else {
      console.log("No posts matched the query. Deleted 0 posts.");
    }
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown exceptions
run().catch(console.dir);


app.listen(port, () => {
  console.log('Running on port 3000!')
})
*/
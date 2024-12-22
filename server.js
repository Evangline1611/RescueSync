const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const UserModel=require('./models/user')
const { MongoClient, ObjectID } = require('mongodb');
const MONGODB_URI = 'mongodb://localhost:27017';
const PORT = 3001;

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/rescuesync', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

app.post('/login',(req,res)=>{
    const{userName,userPassword}=req.body;
    UserModel.findOne({userName:userName})
    .then(user=>{
        if(user){
            if(user.userPassword===userPassword){
                res.json("Success");
            }else{
                res.json("password is incorrect");
            }
        }else{
            res.json("no record existed");
        }
    })
})

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
      .then((user) => {
        console.log("User created:", user);
        res.status(201).json(user); // Send back the newly created user
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Failed to create user" }); // Send an error response
      });
  });  
  
  
  // Route to fetch user data from MongoDB
app.get('/fetchUserData', async (req, res) => {
  try {
    const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
    await client.connect();
    const database = client.db('rescuesync');
    const productsCollection = database.collection('users');
    const products = await productsCollection.find({}).toArray();
    client.close();
    res.json(products);
  } 
  catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  }); 
  
  app.put('/updateUserData', async (req, res) => {
    try {
      const updatedUserData = req.body;
      const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
      await client.connect();
      const database = client.db('rescuesync');
      const usersCollection = database.collection('users');
      const filter = { _id: ObjectID(updatedUserData._id) }; // Use ObjectID correctly
      const updateDoc = {
        $set: updatedUserData,
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      client.close();
      console.log('User data updated:', result);
      res.json(result);
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ error: 'Failed to update user data' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
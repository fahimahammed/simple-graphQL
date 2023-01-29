
const { MongoClient, ObjectId  } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';


  // Use connect method to connect to the server
  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const  products = db.collection('products');
  const categories = db.collection('categories');

  // the following code examples can be pasted here...

  
module.exports = {collection, products,categories, db}
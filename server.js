const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema')
const port = process.env.PORT || 3000;
const connectDB = require('./server/config/db')
const colors = require('colors')
const cors = require('cors')
const path = require('path');
const { expressjwt: jwt } = require("express-jwt");
const router = require('express').Router();
const mongoose = require('mongoose')
const User = require('./server/models/User')
const { signToken } = require('./server/utils/auth');

const app = express();

connectDB()

app.use(cors())

const context = async () => {
    const db = await connectDB();
  
    return { db };
  };

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'production',

// })) 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get(
//   "/path",
//   jwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] }),
//   function (req, res) {

    
//     if (!req.auth.admin) return res.sendStatus(401);
//     res.sendStatus(200);
//   }
// );

app.post('/login', (req, res) => {

  const obj = req.body
  const obj1 = JSON.stringify({obj})
  const obj2 = JSON.parse(obj1)
  const { email } = obj2.obj
 
  

  User.findOne({email}, (err, result) => {
    if (result) {
      const jwt = signToken(result)
      res.status(200).json(jwt);
    } else {
      console.log('oh no!');
      res.status(500).json({ message: 'oh no!' });
    }
  });
});

app.post('/create', (req, res) => {

  const obj = req.body
  const obj1 = JSON.stringify({obj})
  const obj2 = JSON.parse(obj1)
  const { email } = obj2.obj
  const jwt = signToken(email)
  res.status(200).json(jwt);

  // User.findOne({email}, (err, result) => {
  //   if (result) {
  //     const jwt = signToken(result)
  //     res.status(200).json(jwt);
  //   } else {
  //     console.log('oh no!');
  //     res.status(500).json({ message: 'oh no!' });
  //   }
  // });
});

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context
    })
  );

  // app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static('public'));
// app.use(express.static('client-app/build'));


//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, console.log(`server running on ${port}`))
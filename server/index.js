const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');

require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`The server is running on the port ${port}`));

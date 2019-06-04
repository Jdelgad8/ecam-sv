const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// mongoose.connect('mongodb://localhost:27017/ecam2018', {
mongoose.connect('mongodb+srv://valerin:@MatiPoncha2@valerin-m87lp.mongodb.net/ecam_2018?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to Atlas Mongo database')
});

app.use(
  '/graphql',
  cors(),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log('Now listening for request on port 5000')
});

/* const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');
const { MongoClient } = require('mongodb');
const schema = require('./schema/schema');


const app = express()

app.use(cors())

const homePath = '/graphiql'
const URL = 'http://localhost'
const PORT = 5000
const MONGO_URL = 'mongodb://localhost:27017'


const start = async () => {
  try {
    await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true
    })

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))


    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log(e)
  }

}

start(); */
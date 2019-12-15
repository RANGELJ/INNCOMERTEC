import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import compression from 'compression';
import cors from 'cors';
import env from './env.json';
import schema from './graphql';

const app = express();
app.use(compression());

app.listen(env.PORT.DEV, () => {
  try {
    app.use('/graphql', cors(), bodyParser.json(), graphqlHTTP({ schema, graphiql: true }));
  } catch (e) {
    console.error(e);
  }
});
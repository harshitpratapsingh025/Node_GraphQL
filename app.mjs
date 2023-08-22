import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import connectDB from './api/config/db.mjs';
import schema from './api/graphql/schema/schema.mjs';

dotenv.config();
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // request parser
app.use(cors()); // handle cors

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

app.get('/', (req, res, next) => {
  const error = new Error('Page Not Found fssss');
  error.status = 404;
  next(error);
});

export default app;

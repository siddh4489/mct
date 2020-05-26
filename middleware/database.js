import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://siddh4489:72scjp72@cluster0-shard-00-02-wiode.mongodb.net:27017/arcus_eth?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('arcus_eth');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
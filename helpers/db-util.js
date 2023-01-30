import { MongoClient } from 'mongodb';

const database = process.env.mongodb_database;
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ekrokk1.mongodb.net/?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db(database);
  const result = await db.collection(collection).insertOne(document);
  return result;
}

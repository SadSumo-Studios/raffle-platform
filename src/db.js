const { MongoClient } = require("mongodb");

let client;

export const initializeDbConnection = async () => {
  const uri = `mongodb+srv://SadSumo:${process.env.MONGO_PASSWORD}@react-auth-cluster.5kf9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};

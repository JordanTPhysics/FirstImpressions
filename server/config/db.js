const mongo = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MongoDB connection string is missing.');
  process.exit(1);
}

const dbName = process.env.MONGODB_NAME;
const client = new mongo(uri, {ssl: true});

let dbConnection;

function connectToServer(callback) {
  client.connect(function (err, db) {
    if (err || !db) {
      console.log('Failed to connect to MongoDB.', err);
      return callback(err);
    }
    dbConnection = db.db(dbName);
    console.log('Successfully connected to MongoDB.');
    return callback();
  });
}
function getDb() {
  return dbConnection;
}

module.exports = {
  connectToServer,
  getDb,
};


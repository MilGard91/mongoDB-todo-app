const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b07f1dd9db3d000d4d5fcd9')
  }, {
      $set: {
          name: 'Miljan'
      },
      $inc: {age: 2}
  }, {
      returnOriginal: false
  }).then(results => {
      console.log(results);
  });
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b07f1dd9db3d000d4d5fcd9')
  }, {
      $set: {
          completed: true
      },
  }, {
      returnOriginal: false
  }).then(results => {
      console.log(results);
  });
  db.collection('User').findOneAndUpdate({
      _id: new ObjectID("5b080b76647db36f5a0eb61e")
  }, {
      $set: {
          name: 'Miljan'
      },
      $inc: {age: 1}
  }, {
      returnOriginal: false
  }).then(results => {
      console.log(results);
  });
  // db.close();
});

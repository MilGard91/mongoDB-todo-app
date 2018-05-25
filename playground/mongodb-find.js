const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b07f1dd9db3d000d4d5fcd9')
  // }).toArray().then(docs => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch todo', err);
  // });

  // db.collection('Todos').find().count().then(count => {
  //   console.log(`Todos count: ${count}`);
  // }, err => {
  //   console.log('Unable to fetch todos', err);
  // });


  db.collection('User').find({name: 'Miljan'}).toArray().then(docs => {
    console.log('Users with name Miljan:');
    console.log(JSON.stringify(docs, undefined, 2))
  }, err => {
    console.log('unable to fetch users', err);
  })
  // db.close();
});

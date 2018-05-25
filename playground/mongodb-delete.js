const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

//   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(results => {
//       console.log(results)
//   }, err => {
//       console.log('Unable to delete data', err)
//   });

//   db.collection('Todos').deleteOne({completed: true}).then(results => {
//       console.log(results);
//   }, err => {
//     console.log('Unable to delete data', err)
// });
//   db.collection('Todos').findOneAndDelete({text: 'Delete me'}).then(results => {
//       console.log(results);
//   }, err => {
//     console.log('Unable to delete data', err)
// });
//   db.collection('User').deleteMany({name: 'Miljan'}).then(results => {
//       console.log('Users deleted');
//   }, err => {
//     console.log('Unable to delete data', err)
// });
//   db.collection('User').findOneAndDelete({
//     _id: new ObjectID("5b080b8f647db36f5a0eb627")
//   }).then(results => {
//       console.log(`User deleted: ${results}`)
//   }, err => {
//     console.log('Unable to delete data', err)
// })
  // db.close();
});

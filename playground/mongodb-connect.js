const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
}, (err, results) => {
    if(err) {
        return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(results.ops, undefined, 2));
});

db.collection('User').insertOne({
    name: 'Miljan',
    age: 26,
    location: 'Belgrade'
}, (err, results) => {
    if(err){
        return console.log('Unable to add user', err)
    }
    console.log('User added:', JSON.stringify(results.ops, undefined, 2));
});

db.close();
})
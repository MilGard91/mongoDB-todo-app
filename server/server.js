const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos});
  }, e=> {
    res.status(400).send(e);
  })
});

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => {
    res.send(doc)
  }, e => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id)
    .then(todo => {
      if(!todo){
        return res.status(404).send();
      }
      res.send({todo});
    })
    .catch(e=> res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send()
  }
  Todo.findByIdAndRemove(id)
    .then(todo => {
      if(!todo){
        return res.status(404).send()
      }
      res.send({todo})
    })
    .catch(e => res.status(400).send())
});

app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})

module.exports = {app}


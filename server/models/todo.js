const {mongoose} = require('mongoose');

const Todo = mongoose.model("Todo", {
    text: {
      type: String
    },
    completed: {
      type: Boolean
    },
    completedAt: {
      type: Number
    }
  });

module.exports = {Todo}
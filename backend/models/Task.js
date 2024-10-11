const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type:String,
      },
  description: {
    type:String,
  },
  dueDate: {
    type:String,
  },
  status: {
    type:Array,
    default:'pending',
  }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
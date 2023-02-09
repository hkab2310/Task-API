const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id:{type:String,unique:true},
    title:{type:String},
    is_completed:{type:Boolean,default: false}
})

const Task = new mongoose.model("Task",taskSchema);

module.exports = Task;
const express = require('express');
const mongoose = require('mongoose');

// const Task = require('./Models/task');
const CreateTaskRoutes = require('./Routes/CreateTask');
const GetTaskRoutes = require('./Routes/GetTask');
const EditTaskRoutes = require('./Routes/EditTask');
const DeleteTaskRoutes = require('./Routes/DeleteTask');

const app = express();

mongoose.connect("mongodb://localhost/task-API-assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    })

app.use("/", CreateTaskRoutes);
app.use("/", GetTaskRoutes);
app.use("/", EditTaskRoutes);
app.use("/", DeleteTaskRoutes);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
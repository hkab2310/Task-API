const Router = require('express').Router();
const Task = require("../Models/task");
const bodyParser = require("body-parser");

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded());

Router.post("/v1/tasks", async (req, res) => {
    try {
        const task = req.body;
        const id = Date.now();
        console.log(task);
        const newTask = await Task.create({...task,id:id});
        res.status(201).json({
            id:newTask
        })

    } catch (e) {
        return res.status(400).json({
            status: "failed",
            mesaage: e
        })
    }
})

module.exports = Router;
const Router = require('express').Router();
const Task = require("../Models/task");

Router.get('/v1/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({
            tasks: tasks
        })

    } catch (e) {
        return res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

Router.get('/v1/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.find({ id: id })
        // console.log(task);
        if (task.length === 0) {
            return res.status(404).json({
                error: "There is no task at that id"
            }) 
        }
        res.status(200).json({
            task
        })
    } catch (e) {
        return res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

})

module.exports = Router;
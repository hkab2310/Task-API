const Router = require('express').Router();
const Task = require("../Models/task");
const bodyParser = require("body-parser");

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded());

Router.put("/v1/tasks/:id",async(req,res)=>{
    try{
        const id= req.params.id;
        const task = await Task.find({ id: id })
        // console.log(task);
        if (task.length === 0) {
            return res.status(404).json({
                error: "There is no task at that id"
            }) 
        }
        // console.log(req.body);
        const result = await Task.updateOne({id:id},{
            $set : {...req.body}
        })
        return res.status(204).json({
            result
        })
    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

module.exports = Router;
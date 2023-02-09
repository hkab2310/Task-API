const Router = require('express').Router();
const Task = require("../Models/task");


Router.delete("/v1/tasks/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const task = await Task.find({ id: id })
        // console.log(task);
        if (task.length === 0) {
            return res.status(204).json({
                task
            }) 
        }
        const result= await Task.deleteOne({id:id})
        res.status(204).json({
            result
        })
    }catch(e){
        return res.status(400).json({
            status: "failed",
            mesaage: e.mesaage
        })
    }
   
})

module.exports = Router
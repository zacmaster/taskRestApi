const mongoose = require('mongoose')
const Task = require('../models/task')

exports.createTask = (req,res) => {
    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
    })

    task.save((err,task) => {
        if(err) res.send(err)
        res.status(200).json(task)
    })
}


exports.readAllTasks = (req,res) => {
    Task.find({},(err,tasks) => {
        if(err)res.send(err)
        res.json(tasks)
    })
}

exports.readTask = (req,res) => {
    const id = req.params.taskId
    Task.findById(id,(err,task) =>{
        if(err) res.send(err)
        res.json(task)
    })
}


exports.updateTask = (req,res) => {
    const id = req.params.taskId
    Task.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true},
        (err,task) => {
            if(err) res.send(err)
            res.status(201).json(task)
        }
    )
}

exports.deleteTask = (req,res) => {
    const id = req.params.taskId
    Task.deleteOne(
        {_id: id},
        (err) => {
            if(err) res.send(err)
            res.status(200).json({message: 'Task successfully deleted!'})
        }
    )
}

exports.deleteAllTasks = (req,res) => {
    Task.deleteMany(
        {},
        (err) => {
            if(err) res.send(err)
            res.status(200).json({message: 'All tasks were deleted!'})
        }
    )
}

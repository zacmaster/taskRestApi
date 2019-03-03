const mongoose = require('mongoose')
const Task = mongoose.model('Task')

exports.createTask = (req,res) => {
    const task = new Task(req.body)
    task.save((err,task) => {
        if(err) res.send(err)
        res.status().json(task)
    })
}


exports.readAllTasks = (req,res) => {
    Task.find({},(err,task) => {
        if(err)res.send(err)
        res.json(task)
    })
}

exports.readTask = () => {
    
}


exports.updateTask = () => {

}

exports.deleteTask = () => {

}

exports.deleteAllTasks = () => {

}

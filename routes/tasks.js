const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Task = require('../models/task')


router.get('/',(req,res,next) => {
    Task.find({},(err,task)=>{
        if(err) res.send(err)
        res.json(task)
    })
})




router.post('/',(req,res,next) => {
    const task = new Task({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });
    task.save()
        .then(r => {
            console.log(r)
            res.status(201).json({message: 'Handling POST requests to /tasks', createdTask: r})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})



router.delete('/',(req,res,next) => {
    Task.remove()
        .exec()
        .then(r => res.status(200).json(r))
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.delete('/:taskId',(req,res,next) => {
    const id = req.params.taskId
    Task.remove({_id: id})
        .exec()
        .then(r => {res.status(200).json(r)})
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.put('/:taskId',(req,res,next) => {
    const id = req.params.taskId

    Task.findOneAndUpdate({_id: id}, req.body,{new: true},(err,task) => {
        if(err) res.send(err)
        res.json(task)
    })
})


module.exports = router
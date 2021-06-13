const {response, request} = require('express');

const Task = require('../models/tasks');

const taskGet = async(req = request, res = response) => {
    
    const tasks = await Task.find();
    const total = await Task.countDocuments();
    const terminadas = await Task.countDocuments({done:true});
    const abiertas = await Task.countDocuments({done:false});

    res.json({
        tasks,
        total,
        terminadas,
        abiertas

    });
}

const taskPost = async(req, res = response) => {
    const body = req.body;
   
    const task = new Task(body);

    // Guardar en BD
    await task.save();

    res.json({
        task
    });
}

const taskPut = async(req, res = response) => {

    const { id } = req.params;
    const {taskDone,date_end} = req.body;
  
   
    const task = await Task.findByIdAndUpdate( id, {done : !taskDone , date_end:date_end } );
    
    res.json({
        msg: 'Tarea actualizada correctamente - servidor',
        task
    })
    
    // 
   
   
    // res.json({
    //     msg: 'Tarea actualizada correctamente - servidor',
    //     task
    // })
}


const taskPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - controlador'
    })
}

const taskDelete = async(req, res = response) => {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete( id );


    
    res.json(task);
}


module.exports = {
    taskGet,
    taskPost,
    taskPut,
    taskPatch,
    taskDelete
}
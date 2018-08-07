const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// Root endpoint
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {
        tasks: tasks
    });
});

// Add tasks
router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

// Toggle task
router.get('/toggle/:id', async(req, res) => {
    console.log("Request params: ", req.params)
    console.log("Toggle request received for task #", req.params.id)
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

// Edit task
router.get('/edit/:id', async (req, res) => {
    console.log("Request params: ", req.params)
    console.log("Edit request received for task #", req.params.id)
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task: task
    });
});

// Delete tasks
router.get('/delete/:id', async (req, res) => {
    console.log("Request params: ", req.params)
    console.log("Delete request received for task #", req.params.id)
    await Task.remove({_id: req.params.id});
    console.log("Successfully deleted :)")
    res.redirect('/');
});

module.exports = router;
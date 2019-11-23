const express = require('express');
const tasks = require('./tasksModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const tasksList = await tasks.find();
  res.status(200).json(tasksList);
});

router.post('/', async (req, res) => {
  const taskBody = {...req.body};
  req.body.completed === undefined ? taskBody.completed = false : null;
  const [id] = await tasks.insert(taskBody)
  res.status(201).json(id);
});

module.exports = router;
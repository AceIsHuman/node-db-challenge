const express = require('express');
const tasks = require('./tasksModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const tasksList = await tasks.find();
  res.status(200).json(tasksList);
});

router.post('/', async (req, res) => {
  const [id] = await tasks.insert(req.body)
  res.status(201).json(id);
});

module.exports = router;
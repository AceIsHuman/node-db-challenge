const express = require('express');
const projects = require('./projectsModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const projectsList = await projects.find();
  res.status(200).json(projectsList);
});

router.post('/', async (req, res) => {
  const projectBody = {...req.body};
  req.body.completed === undefined ? projectBody.completed = false : null;
  const [id] = await projects.insert(projectBody);
  res.status(201).json(id);
});

module.exports = router;
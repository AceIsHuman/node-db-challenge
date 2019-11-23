const express = require('express');
const projects = require('./projectsModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await projects.find();
  res.status(200).json(projects);
});

router.post('/', async (req, res) => {
  const [id] = await projects.insert(req.body)
  res.status(201).json(id);
});

module.exports = router;
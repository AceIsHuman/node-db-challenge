const express = require('express');
const resources = require('./resourcesModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const resourcesList = await resources.find();
  res.status(200).json(resourcesList);
});

router.post('/', async (req, res) => {
  const [id] = await resources.insert(req.body);
  res.status(201).json(id);
});

module.exports = router;
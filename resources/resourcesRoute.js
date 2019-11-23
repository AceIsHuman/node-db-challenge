const express = require('express');
const resources = require('./resourcesModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const resources = await resources.find();
  res.status(200).json(resources);
});

module.exports = router;
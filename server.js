const express = require('express');
const helmet = require('helmet');

const resourcesRouter = require('./resources/resourcesRoute');
const projectsRouter = require('./projects/projectsRoute');
const tasksRouter = require('./tasks/tasksRoute');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/resources/', resourcesRouter);
server.use('/api/projects/', projectsRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;
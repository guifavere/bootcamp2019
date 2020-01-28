const express = require('express');
const server = express();

const projects = [];
let reqsTotal = 0;

server.use(express.json());

server.use((req, res, next) => {
  reqsTotal++;

  console.log(reqsTotal);

  return next();
});

const checkProjectIdExists = (req, res, next) => {
  const { id } = req.params;
  const { index } = projects.findIndex(el => el.id === id);

  if (!index) {
    return res.status(400).json({ message: 'The project does not exists.' })
  }

  return next();
};

server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body

  projects.push({...{ id, title, tasks }});

  return res.send();
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', checkProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const index = projects.findIndex(el => el.id === id);

  projects[index].title = title;

  return res.send();
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(el => el.id === id);

  projects.splice(index, 1);

  return res.send();
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const index = projects.findIndex(el => el.id === id);

  projects[index].tasks.push(title);

  return res.send();
});

server.listen(3000);
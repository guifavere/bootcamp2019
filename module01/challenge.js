const express = require('express');
const server = express();

const projects = [];
let requests = 0;

server.use(express.json());
server.use((req, res, next) => {
  logRequests();

  return next();
});

const checkProjectExists = (req, res, next) => {
  const index = findProjectIndex(req.params.id);

  if (index === -1)
    return res.status(400).json({ message: 'The project does not exists.' });

  req.projectIndex = index;

  return next();
};
const findProjectIndex = id => projects.findIndex(el => el.id === id);
const logRequests = () => {
  requests++;

  console.log(`Request number: ${requests}`);
}

server.get('/projects', (req, res) => res.json(projects));
server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body

  projects.push({...{ id, title, tasks }});

  return res.send();
});
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  projects.splice(req.projectIndex, 1);

  return res.send();
});
server.put('/projects/:id', checkProjectExists, (req, res) => {
  projects[req.projectIndex].title = req.body.title;

  return res.send();
});
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  projects[req.projectIndex].tasks.push(req.body.title);

  return res.send();
});

server.listen(3000);